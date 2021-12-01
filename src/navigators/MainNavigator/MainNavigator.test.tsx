import 'jsdom-global/register';
import React from 'react';
import {render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {NavigationContainer} from '@react-navigation/native';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  LoadingScreen,
  LoginScreen,
  PokeListScreen,
  SettingsScreen,
} from '../../screens';
import {MainNavigator} from '../MainNavigator';
import {MainNavigationType, OnboardingNavigationType} from '../../types';
configure({adapter: new Adapter()});

describe('Test many aspects of MainNavigator', () => {
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
  const shallowMainNavigator = shallow(
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>,
  );
  test('check does it match Snapshot', () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('check if MainNavigator renders', () => {
    expect(renderMainNavigator.toJSON()).toBeDefined();
  });
  it('check if MainNavigator mounts', () => {
    expect(mountMainNavigator.exists()).toBeTruthy();
  });
  it('check does MainNavigator go to expected default screen', async () => {
    expect(mountMainNavigator.find('profileScreenText')).toBeDefined();
  });
  it('check if another screen is also a child at the same mount', () => {
    expect(
      mountMainNavigator.containsMatchingElement(
        <LoadingScreen
          navigation={onboardingNavigation as OnboardingNavigationType}
        />,
      ),
    ).toEqual(false);
    expect(
      mountMainNavigator.containsMatchingElement(
        <LoginScreen
          navigation={onboardingNavigation as OnboardingNavigationType}
        />,
      ),
    ).toEqual(false);
    expect(
      mountMainNavigator.containsMatchingElement(
        <PokeListScreen navigation={mainNavigation as MainNavigationType} />,
      ),
    ).toEqual(false);
    expect(
      mountMainNavigator.containsMatchingElement(
        <SettingsScreen navigation={mainNavigation as MainNavigationType} />,
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
