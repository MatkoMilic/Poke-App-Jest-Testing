import {act} from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders correctly', async () => {
  await act(async () => {});
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
