import React from 'react';
import renderer from 'react-test-renderer';
import {OnboardingNavigationType} from '../../types';
import LoadingScreen from './LoadingScreen';

let navigation: OnboardingNavigationType;

test('renders correctly', () => {
  const tree = renderer
    .create(<LoadingScreen navigation={navigation} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
