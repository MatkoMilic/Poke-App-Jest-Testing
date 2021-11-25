import 'jsdom-global/register';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-native/extend-expect';
import React from 'react';
import {
  fireEvent,
  render,
  RenderAPI,
  within,
} from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configure, mount} from 'enzyme';
import renderer, {act} from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import {MainNavigationType} from '../../types';
import SettingsScreen from './SettingsScreen';
import {Header} from '../../components';
import {ThemeContext, ThemeProvider} from '../../components';

configure({adapter: new Adapter()});

describe('SettingsScreen change theme', () => {
  let navigation: Partial<MainNavigationType>;
  let mountSettingsScreen: any;
  let renderSettingsScreen: RenderAPI;
  beforeEach(() => {
    navigation = {
      dispatch: jest.fn(),
    };
    mountSettingsScreen = mount(
      <SettingsScreen navigation={navigation as MainNavigationType} />,
    );
    renderSettingsScreen = render(
      <SettingsScreen navigation={navigation as MainNavigationType} />,
    );
  });
  test('settings screen renders correctly', () => {
    const tree = renderer
      .create(<SettingsScreen navigation={navigation as MainNavigationType} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('does SettingsScreen contain header', () => {
    expect(mountSettingsScreen.containsMatchingElement(<Header />)).toEqual(
      true,
    );
  });
  test('does SettingsScreen mounts', () => {
    expect(mountSettingsScreen).toBeDefined();
  });
  it('first renders with dark theme value false because its default', () => {
    const {getByTestId, getByText} = render(
      <ThemeProvider>
        <SettingsScreen navigation={navigation as MainNavigationType} />
      </ThemeProvider>,
    );
    const themeValueText = getByTestId('isThemeDarkText');
    expect(themeValueText.children[0]).toEqual('Theme at the moment is: false');
    expect(getByText('Theme at the moment is: false')).toBeTruthy();
  });
  it('test change isThemeDark to true and onValueChange firing', async () => {
    const {getByTestId, getByText} = render(
      <ThemeProvider>
        <SettingsScreen navigation={navigation as MainNavigationType} />
      </ThemeProvider>,
    );
    const themeSwitch = getByTestId('testSwitch');
    fireEvent.press(themeSwitch, 'onValueChange');
    const themeValueText = getByTestId('isThemeDarkText');
    expect(themeValueText.children[0]).toEqual('Theme at the moment is: true');
    expect(getByText('Theme at the moment is: true')).toBeTruthy();
  });
  it('test does saved theme in async storage match the right theme', async () => {
    const {getByTestId, getByText} = render(
      <ThemeProvider>
        <SettingsScreen navigation={navigation as MainNavigationType} />
      </ThemeProvider>,
    );
    const themeValueText =
      getByTestId('isThemeDarkText').children[0].toString();
    await AsyncStorage.setItem('theme', themeValueText);
    let theme = await AsyncStorage.getItem('theme');
    expect(theme).toBe(themeValueText);
  });
  it('does it unmount', () => {
    mountSettingsScreen.unmount();
    expect(mountSettingsScreen.exists()).toBeFalsy();
  });
});
