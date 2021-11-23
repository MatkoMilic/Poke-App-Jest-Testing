import React from 'react';
import renderer from 'react-test-renderer';
import {MainNavigationType} from '../../types';
import ProfileScreen from './ProfileScreen';

let navigation: MainNavigationType;

test('renders correctly', () => {
  const tree = renderer
    .create(<ProfileScreen navigation={navigation} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
