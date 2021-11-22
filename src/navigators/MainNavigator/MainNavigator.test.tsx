import 'jsdom-global/register';
import React from 'react';
import {act, render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {configure, EnzymeAdapter, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  LoadingScreen,
  LoginScreen,
  PokeListScreen,
  ProfileScreen,
  SettingsScreen,
} from '../../screens';
import {MainNavigator} from '../MainNavigator';
configure({adapter: new Adapter()});

describe('Test many aspects of MainNavigator', () => {
  const mountMainNavigator = mount(
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>,
  );
  const renderMainNavigator = render(
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>,
  );
  it('check if MainNavigator renders', () => {
    expect(renderMainNavigator.toJSON()).toBeDefined();
  });
  it('check if MainNavigator mounts', () => {
    expect(mountMainNavigator.exists()).toBeTruthy();
  });
  it('check does MainNavigator go to expected default screen', () => {
    expect(
      mountMainNavigator.containsMatchingElement(<ProfileScreen />),
    ).toEqual(true);
  });
  it('check if another screen is also a child at the same mount', () => {
    expect(
      mountMainNavigator.containsMatchingElement(<LoadingScreen />),
    ).toEqual(false);
    expect(mountMainNavigator.containsMatchingElement(<LoginScreen />)).toEqual(
      false,
    );
    expect(
      mountMainNavigator.containsMatchingElement(<PokeListScreen />),
    ).toEqual(false);
    expect(
      mountMainNavigator.containsMatchingElement(<SettingsScreen />),
    ).toEqual(false);
  });
  it('check is the proper navigator present', () => {
    expect(
      mountMainNavigator.containsMatchingElement(<MainNavigator />),
    ).toEqual(true);
  });
  it('check does unmount work on MainNavigator', () => {
    mountMainNavigator.unmount();
    expect(mountMainNavigator.exists()).toBeFalsy();
  });
});
