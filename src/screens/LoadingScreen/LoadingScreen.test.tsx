import React from 'react';
import renderer from 'react-test-renderer';
import {OnboardingNavigationType} from '../../types';
import LoadingScreen from './LoadingScreen';

let navigation: Partial<OnboardingNavigationType>;
beforeEach(() => {
  navigation = {
    dispatch: jest.fn(),
  };
});
test('loading screen renders correctly', () => {
  const tree = renderer
    .create(
      <LoadingScreen navigation={navigation as OnboardingNavigationType} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
