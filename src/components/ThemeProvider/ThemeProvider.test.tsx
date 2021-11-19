import React from 'react';
import {Switch, Text} from 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import {ThemeContext, ThemeProvider} from './ThemeProvider';

describe('ThemeProvider', () => {
  it('first renders with light mode because its default', () => {
    const {getByText} = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(value) => (
            <Text>Is theme light: {value.isThemeDark.toString()}</Text>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>,
    );
    expect(getByText('Is theme light: false')).toBeTruthy();
  });
});

describe('toggleTheme', () => {
  it('check does Theme toggle', () => {
    const {getByText, getByTestId} = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(value) => (
            <>
              <Text>Is theme light: {value.isThemeDark.toString()}</Text>
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
    expect(getByText('Is theme light: true')).toBeTruthy();
  });
});

describe('toggleTheme', () => {
  it('toggle theme and then toggle it back', () => {
    const {getByText, getByTestId} = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(value) => (
            <>
              <Text>Is theme light: {value.isThemeDark.toString()}</Text>
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
    expect(getByText('Is theme light: true')).toBeTruthy();
    fireEvent.press(themeSwitch, 'onValueChange');
    expect(getByText('Is theme light: false')).toBeTruthy();
  });
});
