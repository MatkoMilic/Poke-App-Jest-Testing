import 'jsdom-global/register';
import React from 'react';
import {Switch, Text} from 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configure, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import {MainNavigationType} from '../../types';
import SettingsScreen from './SettingsScreen';
import {
  Header,
  ScreenContainer,
  ThemeContext,
  ThemeProvider,
} from '../../components';
configure({adapter: new Adapter()});

describe('SettingsScreen change theme', () => {
  let navigation: MainNavigationType;
  test('renders correctly', () => {
    const tree = renderer
      .create(<SettingsScreen navigation={navigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('does SettingsScreen contain header', () => {
    const mountSettingsScreen = mount(
      <SettingsScreen navigation={navigation} />,
    );
    expect(mountSettingsScreen.containsMatchingElement(<Header />)).toEqual(
      true,
    );
  });
  test('does SettingsScreen contain header', () => {
    const mountSettingsScreen = mount(
      <SettingsScreen navigation={navigation} />,
    );
    expect(mountSettingsScreen).toBeDefined();
  });
  it('first renders with dark theme off (false) because its default', () => {
    const {getByText} = render(
      <ThemeContext.Consumer>
        {(value) => (
          <SettingsScreen navigation={navigation}>
            <Text>{value.isThemeDark}</Text>
          </SettingsScreen>
        )}
      </ThemeContext.Consumer>,
    );
    expect(getByText('false')).toBeTruthy();
  });
  it('test change isThemeDark to true and onValueChange firing', () => {
    const {getAllByText, getByTestId} = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(value) => (
            <ScreenContainer>
              <Text>{value.isThemeDark.toString()}</Text>
              <Switch
                testID={'testSwitch'}
                value={value.isThemeDark}
                onValueChange={value.toggleTheme}
              />
            </ScreenContainer>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>,
    );
    const themeSwitch = getByTestId('testSwitch');
    fireEvent.press(themeSwitch, 'onValueChange');
    expect(getAllByText('true')[0]).toBeTruthy();
  });
  it('test does saved theme in async storage match the right theme', async () => {
    const mountSettingsScreen = mount(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(value) => (
            <ScreenContainer>
              <Text>{value.isThemeDark.toString()}</Text>
              <Switch
                testID={'testSwitch'}
                value={value.isThemeDark}
                onValueChange={value.toggleTheme}
              />
            </ScreenContainer>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>,
    );
    const valueText = mountSettingsScreen.find('Text').first().text();
    await AsyncStorage.setItem('theme', valueText);
    let theme = await AsyncStorage.getItem('theme');
    expect(theme).toBe(valueText);
  });
  it('does it unmount', () => {
    const mountSettingsScreen = mount(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(value) => (
            <ScreenContainer>
              <Text>{value.isThemeDark.toString()}</Text>
              <Switch
                testID={'testSwitch'}
                value={value.isThemeDark}
                onValueChange={value.toggleTheme}
              />
            </ScreenContainer>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>,
    );
    mountSettingsScreen.unmount();
    expect(mountSettingsScreen.exists()).toBeFalsy();
  });
});
