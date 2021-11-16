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
import {OnboardingNavigator} from '../OnboardingNavigator';
configure({adapter: new Adapter()});

describe('Test many aspects of OnboardingNavigator', () => {
  const mountOnboardingNavigator = mount(
    <NavigationContainer>
      <OnboardingNavigator />
    </NavigationContainer>,
  );
  const renderOnboardingNavigator = render(
    <NavigationContainer>
      <OnboardingNavigator />
    </NavigationContainer>,
  );
  it('check if OnboardingNavigator renders', () => {
    expect(renderOnboardingNavigator.toJSON()).toBeDefined();
  });
  it('check if OnboardingNavigator mounts', () => {
    expect(mountOnboardingNavigator.exists()).toBeTruthy();
  });
  it('check does OnboardingNavigator go to expected default screen', () => {
    expect(
      mountOnboardingNavigator.containsMatchingElement(<LoadingScreen />),
    ).toEqual(true);
  });
  it('check if another screen is also a child at the same mount', () => {
    expect(
      mountOnboardingNavigator.containsMatchingElement(<ProfileScreen />),
    ).toEqual(false);
    expect(
      mountOnboardingNavigator.containsMatchingElement(<LoginScreen />),
    ).toEqual(false);
    expect(
      mountOnboardingNavigator.containsMatchingElement(<PokeListScreen />),
    ).toEqual(false);
    expect(
      mountOnboardingNavigator.containsMatchingElement(<SettingsScreen />),
    ).toEqual(false);
  });
  it('check is the proper navigator present', () => {
    expect(
      mountOnboardingNavigator.containsMatchingElement(<OnboardingNavigator />),
    ).toEqual(true);
  });
  it('check does unmount work on OnboardingNavigator', () => {
    mountOnboardingNavigator.unmount();
    expect(mountOnboardingNavigator.exists()).toBeFalsy();
  });
});
