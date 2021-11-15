import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoadingScreen, LoginScreen} from '../../screens';
import {OnboardingNavigatorScreens} from '../../types/navigatorTypes';

const OnboardingStack = createNativeStackNavigator();

const OnboardingNavigator: FC = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={OnboardingNavigatorScreens.LOADING_SCREEN}>
      <OnboardingStack.Screen
        name={OnboardingNavigatorScreens.LOADING_SCREEN}
        options={{headerShown: false}}
        component={LoadingScreen}
      />
      <OnboardingStack.Screen
        name={OnboardingNavigatorScreens.LOGIN_SCREEN}
        options={{headerShown: false}}
        component={LoginScreen}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
