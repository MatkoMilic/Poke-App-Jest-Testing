import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoadingScreen, LoginScreen} from '../../screens';
import {LOADING_SCREEN, LOGIN_SCREEN} from '../../constants';

const OnboardingStack = createNativeStackNavigator();

const OnboardingNavigator: FC = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={LOADING_SCREEN}>
      <OnboardingStack.Screen
        name={LOADING_SCREEN}
        options={{headerShown: false}}
        component={LoadingScreen}
      />
      <OnboardingStack.Screen
        name={LOGIN_SCREEN}
        options={{headerShown: false}}
        component={LoginScreen}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
