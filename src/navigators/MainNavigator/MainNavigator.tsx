import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen, SettingsScreen, PokeListScreen} from '../../screens';
import {
  POKELIST_SCREEN,
  PROFILE_SCREEN,
  SETTINGS_SCREEN,
} from '../../constants';

const MainStack = createNativeStackNavigator();

const MainNavigator: FC = () => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={PROFILE_SCREEN}>
      <MainStack.Screen
        name={PROFILE_SCREEN}
        options={{headerShown: false}}
        component={ProfileScreen}
      />
      <MainStack.Screen
        name={SETTINGS_SCREEN}
        options={{headerShown: false}}
        component={SettingsScreen}
      />
      <MainStack.Screen name={POKELIST_SCREEN} component={PokeListScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
