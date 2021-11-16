import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingNavigator} from '../OnboardingNavigator';
import {MainNavigator} from '../MainNavigator';
import {NavigatorNames} from '../../types/navigatorTypes';

const RootStack = createNativeStackNavigator();
const RootNavigator: FC = () => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigatorNames.ONBOARDING_NAVIGATOR}>
      <RootStack.Screen
        name={NavigatorNames.ONBOARDING_NAVIGATOR}
        component={OnboardingNavigator}
      />
      <RootStack.Screen
        name={NavigatorNames.MAIN_NAVIGATOR}
        component={MainNavigator}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
