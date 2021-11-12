import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingNavigator} from '../OnboardingNavigator';
import {MainNavigator} from '../MainNavigator';
import {navigatorNames} from '../../constants';

const RootStack = createNativeStackNavigator();

const RootNavigator: FC = () => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={navigatorNames.ONBOARDING_NAVIGATOR}>
      <RootStack.Screen
        name={navigatorNames.ONBOARDING_NAVIGATOR}
        component={OnboardingNavigator}
      />
      <RootStack.Screen
        name={navigatorNames.MAIN_NAVIGATOR}
        component={MainNavigator}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
