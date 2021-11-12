import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {OnboardingNavigator} from '../OnboardingNavigator';

describe('OnboardingNavigator', () => {
  it('renders loading screen from OnboardingNavigator', async () => {
    const {getByText} = render(
      <NavigationContainer>
        <OnboardingNavigator />
      </NavigationContainer>,
    );
    const newScreen = getByText('Loading');
    expect(newScreen).toBeTruthy();
  });
});
