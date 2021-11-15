import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen, SettingsScreen, PokeListScreen} from '../../screens';
import {MainNavigatorScreens} from '../../types/navigatorTypes';

const MainStack = createNativeStackNavigator();

const MainNavigator: FC = () => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={MainNavigatorScreens.PROFILE_SCREEN}>
      <MainStack.Screen
        name={MainNavigatorScreens.PROFILE_SCREEN}
        component={ProfileScreen}
      />
      <MainStack.Screen
        name={MainNavigatorScreens.SETTINGS_SCREEN}
        component={SettingsScreen}
      />
      <MainStack.Screen
        name={MainNavigatorScreens.POKELIST_SCREEN}
        component={PokeListScreen}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
