import 'jsdom-global/register';
import React from 'react';
import {act, render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './RootNavigator';
import {configure, EnzymeAdapter, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  LoadingScreen,
  LoginScreen,
  PokeListScreen,
  ProfileScreen,
  SettingsScreen,
} from '../../screens';
import {OnboardingNavigator} from '../OnboardingNavigator';
configure({adapter: new Adapter()});

describe('Test many aspects of RootNavigator', () => {
  const mountRootNavigator = mount(
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>,
  );
  const renderRootNavigator = render(
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>,
  );
  it('check if RootNavigator renders', () => {
    expect(renderRootNavigator.toJSON()).toBeDefined();
  });
  it('check if RootNavigator mounts', () => {
    expect(mountRootNavigator.exists()).toBeTruthy();
  });
  it('check does RootNavigator go to expected default screen', () => {
    expect(
      mountRootNavigator.containsMatchingElement(<LoadingScreen />),
    ).toEqual(true);
  });
  it('check if another screen is also a child at the same mount', () => {
    expect(
      mountRootNavigator.containsMatchingElement(<ProfileScreen />),
    ).toEqual(false);
    expect(mountRootNavigator.containsMatchingElement(<LoginScreen />)).toEqual(
      false,
    );
    expect(
      mountRootNavigator.containsMatchingElement(<PokeListScreen />),
    ).toEqual(false);
    expect(
      mountRootNavigator.containsMatchingElement(<SettingsScreen />),
    ).toEqual(false);
  });
  it('check is the proper navigator a child of RootNavigator', () => {
    expect(
      mountRootNavigator.containsMatchingElement(<OnboardingNavigator />),
    ).toEqual(true);
  });
  it('check does unmount work on RootNavigator', () => {
    mountRootNavigator.unmount();
    expect(mountRootNavigator.exists()).toBeFalsy();
  });
});
