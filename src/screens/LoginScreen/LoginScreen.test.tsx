import React from 'react';
import renderer from 'react-test-renderer';
import {OnboardingNavigationType} from '../../types';
import LoginScreen from './LoginScreen';

let navigation: Partial<OnboardingNavigationType>;
beforeEach(() => {
  navigation = {
    dispatch: jest.fn(),
  };
});
test('login screen renders correctly', () => {
  const tree = renderer
    .create(<LoginScreen navigation={navigation as OnboardingNavigationType} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
