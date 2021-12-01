import React from 'react';
import renderer from 'react-test-renderer';
import {MainNavigationType} from '../../types';
import ProfileScreen from './ProfileScreen';

let navigation: Partial<MainNavigationType>;
beforeEach(() => {
  navigation = {
    dispatch: jest.fn(),
  };
});
test('profile screen renders correctly', () => {
  const tree = renderer
    .create(<ProfileScreen navigation={navigation as MainNavigationType} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
