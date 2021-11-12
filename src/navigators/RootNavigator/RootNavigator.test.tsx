import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './RootNavigator';

describe('MainNavigator', () => {
  it('switches to proper navigator and then proper default route', async () => {
    const {getByText} = render(
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>,
    );
    const newScreen = getByText('Loading');
    expect(newScreen).toBeTruthy();
  });
});
