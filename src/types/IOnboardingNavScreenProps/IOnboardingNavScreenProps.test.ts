import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  RootNavigatorType,
  OnboardingNavigatorParamList,
} from '../navigatorTypes';
import {IOnboardingNavScreenProps} from './IOnboardingNavScreenProps';

var onboardingNavNavigation: CompositeNavigationProp<
  NativeStackNavigationProp<OnboardingNavigatorParamList>,
  NativeStackNavigationProp<RootNavigatorType>
>;

describe('IOnboardingNavScreenProps', () => {
  it('has a navigation that equals expected state', () => {
    const testNavigation: IOnboardingNavScreenProps = {
      navigation: onboardingNavNavigation,
    };
    expect(testNavigation.navigation).toEqual(onboardingNavNavigation);
  });
});
