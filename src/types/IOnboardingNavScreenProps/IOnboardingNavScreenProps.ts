import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  OnboardingNavigatorParamList,
  RootNavigatorParamList,
  RootNavigatorType,
} from '../navigatorTypes/navigatorTypes';

export type OnboardingNavigationType = CompositeNavigationProp<
  NativeStackNavigationProp<OnboardingNavigatorParamList>,
  NativeStackNavigationProp<RootNavigatorType>
>;
export interface IOnboardingNavScreenProps {
  navigation: OnboardingNavigationType;
}
