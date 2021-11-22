import 'jsdom-global/register';
import React from 'react';
import {Switch, Text} from 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import {ThemeContext, ThemeProvider} from './ThemeProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('ThemeProvider', () => {
  it('first renders with dark mode false because its default', () => {
    const {getByText} = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(value) => (
            <Text>Is theme dark: {value.isThemeDark.toString()}</Text>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>,
    );
    expect(getByText('Is theme dark: false')).toBeTruthy();
  });
});

describe('toggleTheme', () => {
  it('check does Theme toggle', () => {
    const {getByText, getByTestId} = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(value) => (
            <>
              <Text>Is theme dark: {value.isThemeDark.toString()}</Text>
              <Switch
                testID={'themeSwitch'}
                value={value.isThemeDark}
                onValueChange={value.toggleTheme}
              />
            </>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>,
    );
    const themeSwitch = getByTestId('themeSwitch');
    fireEvent.press(themeSwitch, 'onValueChange');
    expect(getByText('Is theme dark: true')).toBeTruthy();
  });
});

describe('toggleTheme', () => {
  it('toggle theme and then toggle it back', () => {
    const {getByText, getByTestId} = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(value) => (
            <>
              <Text>Is theme dark: {value.isThemeDark.toString()}</Text>
              <Switch
                testID={'themeSwitch'}
                value={value.isThemeDark}
                onValueChange={value.toggleTheme}
              />
            </>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>,
    );
    const themeSwitch = getByTestId('themeSwitch');
    fireEvent.press(themeSwitch, 'onValueChange');
    expect(getByText('Is theme dark: true')).toBeTruthy();
    fireEvent.press(themeSwitch, 'onValueChange');
    expect(getByText('Is theme dark: false')).toBeTruthy();
  });
});
describe('toggleTheme', () => {
  it('test saving theme to async storage', async () => {
    const mountContext = mount(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(value) => (
            <>
              <Text>{value.isThemeDark.toString()}</Text>
              <Switch
                testID={'themeSwitch'}
                value={value.isThemeDark}
                onValueChange={value.toggleTheme}
              />
            </>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>,
    );
    const valueText = mountContext.find('Text').first().text();
    await AsyncStorage.setItem('theme', valueText);
    let theme = await AsyncStorage.getItem('theme');
    expect(theme).toBe(valueText);
  });
});
