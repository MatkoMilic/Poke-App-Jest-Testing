import 'jsdom-global/register';
import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  LoadingScreen,
  LoginScreen,
  PokeListScreen,
  ProfileScreen,
  SettingsScreen,
} from '../../screens';
import {MainNavigator} from '../MainNavigator';
import {MainNavigationType, OnboardingNavigationType} from '../../types';
configure({adapter: new Adapter()});

describe('Test many aspects of MainNavigator', () => {
  let mainNvigation: MainNavigationType;
  let onboardingNavigation: OnboardingNavigationType;

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
      mountMainNavigator.containsMatchingElement(
        <ProfileScreen navigation={mainNvigation} />,
      ),
    ).toEqual(true);
  });
  it('check if another screen is also a child at the same mount', () => {
    expect(
      mountMainNavigator.containsMatchingElement(
        <LoadingScreen navigation={onboardingNavigation} />,
      ),
    ).toEqual(false);
    expect(mountMainNavigator.containsMatchingElement(<LoginScreen />)).toEqual(
      false,
    );
    expect(
      mountMainNavigator.containsMatchingElement(
        <PokeListScreen navigation={mainNvigation} />,
      ),
    ).toEqual(false);
    expect(
      mountMainNavigator.containsMatchingElement(
        <SettingsScreen navigation={mainNvigation} />,
      ),
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
