import React from 'react';
import renderer from 'react-test-renderer';
import {MainNavigationType} from '../../types';
import PokeListScreen from './PokeListScreen';

let navigation: Partial<MainNavigationType>;
beforeEach(() => {
  navigation = {
    dispatch: jest.fn(),
  };
});
test('pokelist screen renders correctly', () => {
  const tree = renderer
    .create(<PokeListScreen navigation={navigation as MainNavigationType} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
