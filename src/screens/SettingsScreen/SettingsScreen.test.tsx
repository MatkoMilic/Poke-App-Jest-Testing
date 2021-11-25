import 'jsdom-global/register';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-native/extend-expect';
import React from 'react';
import {fireEvent, render, RenderAPI} from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configure, mount} from 'enzyme';
import renderer, {act} from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import {MainNavigationType} from '../../types';
import SettingsScreen from './SettingsScreen';
import {Header} from '../../components';
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
    //TODO: finish this test
    const themeSwitch = renderSettingsScreen.getByTestId('testSwitch');
    act(() => {
      fireEvent.press(themeSwitch, 'onValueChange');
    });
    expect(themeSwitch).toBeCalled();
    const isThemeDarkText = renderSettingsScreen.getByTestId('isThemeDarkText');
    expect(isThemeDarkText.children[0]).toEqual('false');
    expect(isThemeDarkText.props.children).toBe('false');
  });
  it('test change isThemeDark to true and onValueChange firing', async () => {
    //TODO: finish this test
    const mountingSettingsScreen = mount(
      <SettingsScreen navigation={navigation as MainNavigationType} />,
    );
    const themeSwitch = renderSettingsScreen.queryByTestId('testSwitch');
    act(() => {
      if (themeSwitch) {
        fireEvent.press(themeSwitch, 'onValueChange');
      }
    });
    console.log(themeSwitch);
    const themeText = renderSettingsScreen.queryByText('false');
    expect(themeText).toEqual('false');
  });
  it('test does saved theme in async storage match the right theme', async () => {
    const valueText = mountSettingsScreen.find('Text').first().text();
    await AsyncStorage.setItem('theme', valueText);
    let theme = await AsyncStorage.getItem('theme');
    expect(theme).toBe(valueText);
  });
  it('does it unmount', () => {
    mountSettingsScreen.unmount();
    expect(mountSettingsScreen.exists()).toBeFalsy();
  });
});
