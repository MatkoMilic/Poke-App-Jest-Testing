import React from 'react';
import renderer from 'react-test-renderer';
import PokeListScreen from './PokeListScreen';

test('renders correctly', () => {
  const tree = renderer.create(<PokeListScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
