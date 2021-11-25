import 'jsdom-global/register';
import React from 'react';
import {render, RenderAPI} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {configure, mount, ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  LoadingScreen,
  LoginScreen,
  PokeListScreen,
  ProfileScreen,
  SettingsScreen,
} from '../../screens';
import {OnboardingNavigator} from '../OnboardingNavigator';
import {MainNavigationType, OnboardingNavigationType} from '../../types';
configure({adapter: new Adapter()});

describe('Test many aspects of OnboardingNavigator', () => {
  let mountOnboardingNavigator: ReactWrapper;
  let renderOnboardingNavigator: RenderAPI;
  let mainNavigation: Partial<MainNavigationType>;
  let onboardingNavigation: Partial<OnboardingNavigationType>;
  beforeEach(() => {
    mountOnboardingNavigator = mount(
      <NavigationContainer>
        <OnboardingNavigator />
      </NavigationContainer>,
    );
    renderOnboardingNavigator = render(
      <NavigationContainer>
        <OnboardingNavigator />
      </NavigationContainer>,
    );
    mainNavigation = {
      dispatch: jest.fn(),
    };
    onboardingNavigation = {
      dispatch: jest.fn(),
    };
  });
  it('check if OnboardingNavigator renders', () => {
    expect(renderOnboardingNavigator.toJSON()).toBeDefined();
  });
  it('check if OnboardingNavigator mounts', () => {
    expect(mountOnboardingNavigator.exists()).toBeTruthy();
  });
  it('check does OnboardingNavigator go to expected default screen', () => {
    expect(mountOnboardingNavigator.find('loadingText')).toBeDefined();
  });
  it('check if another screen is also a child at the same mount', () => {
    expect(
      mountOnboardingNavigator.containsMatchingElement(
        <ProfileScreen navigation={mainNavigation as MainNavigationType} />,
      ),
    ).toEqual(false);
    expect(
      mountOnboardingNavigator.containsMatchingElement(<LoginScreen />),
    ).toEqual(false);
    expect(
      mountOnboardingNavigator.containsMatchingElement(
        <PokeListScreen navigation={mainNavigation as MainNavigationType} />,
      ),
    ).toEqual(false);
    expect(
      mountOnboardingNavigator.containsMatchingElement(
        <SettingsScreen navigation={mainNavigation as MainNavigationType} />,
      ),
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
