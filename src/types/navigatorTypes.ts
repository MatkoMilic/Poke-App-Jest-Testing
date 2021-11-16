import {NavigatorScreenParams} from '@react-navigation/native';

export enum OnboardingNavigatorScreens {
  LOADING_SCREEN = 'LOADING_SCREEN',
  LOGIN_SCREEN = 'LOGIN_SCREEN',
}
export type OnboardingNavigatorParamList = {
  LOADING_SCREEN: undefined;
  LOGIN_SCREEN: undefined;
};
export type OnboardingNavigatorKeys = keyof OnboardingNavigatorScreens;
export enum MainNavigatorScreens {
  PROFILE_SCREEN = 'PROFILE_SCREEN',
  POKELIST_SCREEN = 'POKELIST_SCREEN',
  SETTINGS_SCREEN = 'SETTINGS_SCREEN',
}
export type MainNavigatorParamList = {
  PROFILE_SCREEN: undefined;
  POKELIST_SCREEN: undefined;
  SETTINGS_SCREEN: undefined;
};
export type MainNavigatorKeys = keyof MainNavigatorScreens;
export enum NavigatorNames {
  MAIN_NAVIGATOR = 'MAIN_NAVIGATOR',
  ONBOARDING_NAVIGATOR = 'ONBOARDING_NAVIGATOR',
}
export type NavigatorNameKeys = keyof NavigatorNames;
export type RootNavigatorType = {
  MAIN_NAVIGATOR: NavigatorScreenParams<MainNavigatorParamList>;
  ONBOARDING_NAVIGATOR: NavigatorScreenParams<OnboardingNavigatorParamList>;
};
export type RootNavigatorParamList = {
  MAIN_NAVIGATOR: undefined;
  ONBOARDING_NAVIGATOR: undefined;
};
export type RootNavigatorKeys = keyof RootNavigatorType;
