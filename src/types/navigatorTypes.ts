import {NavigatorScreenParams} from '@react-navigation/native';

export enum OnboardingNavigatorScreens {
  LOADING_SCREEN = 'LoadingScreen',
  LOGIN_SCREEN = 'LoginScreen',
}
export type OnboardingNavigatorParamList = {
  LOADING_SCREEN: undefined;
  LOGIN_SCREEN: undefined;
};
export type OnboardingNavigatorKeys = keyof OnboardingNavigatorScreens;
export enum MainNavigatorScreens {
  PROFILE_SCREEN = 'ProfileScreen',
  POKELIST_SCREEN = 'PokeListScreen',
  SETTINGS_SCREEN = 'SettingsScreen',
}
export type MainNavigatorParamList = {
  PROFILE_SCREEN: undefined;
  POKELIST_SCREEN: undefined;
  SETTINGS_SCREEN: undefined;
};
export type MainNavigatorKeys = keyof MainNavigatorScreens;
export enum NavigatorNames {
  MainNavigator = 'MainNavigator',
  OnboardingNavigator = 'OnboardingNavigator',
}
export type NavigatorNameKeys = keyof NavigatorNames;
export type RootNavigatorType = {
  MainNavigator: NavigatorScreenParams<MainNavigatorParamList>;
  OnboardingNavigator: NavigatorScreenParams<OnboardingNavigatorParamList>;
};
export type RootNavigatorParamList = {
  MainNavigator: undefined;
  OnboardingNavigator: undefined;
};
export type RootNavigatorKeys = keyof RootNavigatorType;
