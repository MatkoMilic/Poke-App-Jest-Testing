import React from 'react';
import renderer from 'react-test-renderer';
import {MainNavigationType} from '../../types';
import PokeListScreen from './PokeListScreen';

let navigation: MainNavigationType;

test('renders correctly', () => {
  const tree = renderer
    .create(<PokeListScreen navigation={navigation} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
