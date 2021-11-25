import React from 'react';
import renderer from 'react-test-renderer';
import LoginScreen from './LoginScreen';

test('login screen renders correctly', () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
