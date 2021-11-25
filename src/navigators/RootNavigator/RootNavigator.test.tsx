import 'jsdom-global/register';
import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './RootNavigator';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  LoginScreen,
  PokeListScreen,
  ProfileScreen,
  SettingsScreen,
} from '../../screens';
import {OnboardingNavigator} from '../OnboardingNavigator';
import {MainNavigationType, OnboardingNavigationType} from '../../types';
configure({adapter: new Adapter()});

describe('Test many aspects of RootNavigator', () => {
  let mainNavigation: Partial<MainNavigationType>;
  let onboardingNavigation: Partial<OnboardingNavigationType>;
  beforeEach(() => {
    mainNavigation = {
      dispatch: jest.fn(),
    };
    onboardingNavigation = {
      dispatch: jest.fn(),
    };
  });
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
  const isItOnboardingNavigator = mountRootNavigator.containsMatchingElement(
    <OnboardingNavigator />,
  );
  const testIfIsOnboardingNavigator = (isItOnboardingNavigator: boolean) =>
    isItOnboardingNavigator ? it : it.skip;

  test('check if RootNavigator renders', () => {
    expect(renderRootNavigator.toJSON()).toBeDefined();
  });
  it('check if RootNavigator mounts', () => {
    expect(mountRootNavigator.exists()).toBeTruthy();
  });
  testIfIsOnboardingNavigator(isItOnboardingNavigator)(
    'if we go to OnboardingNav check default screen',
    async () => {
      expect(mountRootNavigator.find('loadingText')).toBeDefined();
    },
  );
  it('check if another screen is also a child at the same mount', () => {
    expect(
      mountRootNavigator.containsMatchingElement(
        <ProfileScreen navigation={mainNavigation as MainNavigationType} />,
      ),
    ).toEqual(false);
    expect(mountRootNavigator.containsMatchingElement(<LoginScreen />)).toEqual(
      false,
    );
    expect(
      mountRootNavigator.containsMatchingElement(
        <PokeListScreen navigation={mainNavigation as MainNavigationType} />,
      ),
    ).toEqual(false);
    expect(
      mountRootNavigator.containsMatchingElement(
        <SettingsScreen navigation={mainNavigation as MainNavigationType} />,
      ),
    ).toEqual(false);
  });
  it('check is the proper navigator a child of RootNavigator', () => {
    expect(
      mountRootNavigator.containsMatchingElement(<OnboardingNavigator />),
    ).toEqual(true);
  });
  it('check if it matches the snapshot', () => {
    expect(mountRootNavigator).toMatchSnapshot();
  });
  it('check does unmount work on RootNavigator', () => {
    mountRootNavigator.unmount();
    expect(mountRootNavigator.exists()).toBeFalsy();
  });
});
