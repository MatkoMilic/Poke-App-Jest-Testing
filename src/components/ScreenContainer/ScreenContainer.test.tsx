import React from 'react';
import renderer from 'react-test-renderer';
import ScreenContainer from './ScreenContainer';

test('renders correctly', () => {
  const tree = renderer.create(<ScreenContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
