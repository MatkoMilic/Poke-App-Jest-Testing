import React from 'react';
import renderer from 'react-test-renderer';
import {MainNavigationType} from '../../types';
import SettingsScreen from './SettingsScreen';

let navigation: MainNavigationType;

test('renders correctly', () => {
  const tree = renderer
    .create(<SettingsScreen navigation={navigation} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
