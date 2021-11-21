import React from 'react';
import {act} from '@testing-library/react-native';
import {configure, shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';
import {RootNavigator} from './navigators';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

test('renders correctly', async () => {
  await act(async () => {});
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('App Component', () => {
  it('renders proper child component', () => {
    const app = shallow(<App />);
    expect(app.containsMatchingElement(<RootNavigator />)).toEqual(true);
  });
});
