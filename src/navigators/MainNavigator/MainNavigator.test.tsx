import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './MainNavigator';

describe('MainNavigator', () => {
  it('renders profile screen as it is the defaultRoute', async () => {
    const {getByText} = render(
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>,
    );
    const newScreen = getByText('Welcome to profile screen');
    expect(newScreen).toBeTruthy();
  });
});
