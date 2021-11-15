import '@testing-library/jest-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ReactTestRendererJSON} from 'react-test-renderer';
import {configure, EnzymeAdapter, shallow} from 'enzyme';
import {LoadingScreen} from '../../screens';
import {ThemeContext} from './ThemeProvider';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

type treeType = ReactTestRendererJSON | ReactTestRendererJSON[] | null;

const findElement = (tree: treeType, element: string) => {
  console.log('expect tree: ', tree);
  console.log('expect element: ', element);
  return true;
};

it('find element', () => {
  let tree = render(<LoadingScreen />).toJSON();
  //fireEvent.press(switchButton);

  expect(findElement(tree, 'switchTheme')).toBeDefined();
});

test('first renders with light mode because its default', () => {
  const {getByTestId, getByText} = render(<LoadingScreen />);
  expect(getByTestId('loadingText')).toBeDefined();
  expect(getByText('Loading & theme is: light')).toBeTruthy();
});

describe('when the toggle theme button is clicked', () => {
  const {getByTestId, getByText} = render(<LoadingScreen />);
  const wrapper = shallow(<LoadingScreen />);
  const Switch = wrapper.find('[testID="switchTheme"]');

  //jest.mock('Switch');
  const switchButton = getByTestId('switchTheme');
  beforeEach(() => {
    fireEvent.press(getByTestId('switchTheme'), 'onValueChange');
    Switch.simulate('touch');
  });
  //fireEvent.press(switchButton);
  //Switch.simulate('touch');

  test('then theme changes', () => {
    const {getByTestId, getByText} = render(<LoadingScreen />);
    //expect(getByTestId('loadingText')).toBeDefined();
    expect(getByText('Loading & theme is: dark')).toBeTruthy();
  });
});
