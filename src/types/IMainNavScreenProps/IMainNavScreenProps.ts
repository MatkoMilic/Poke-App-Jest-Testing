import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList, RootNavigatorParamsList} from '../../types';

export type MainNavigationType = CompositeNavigationProp<
  NativeStackNavigationProp<MainStackParamList>,
  NativeStackNavigationProp<RootNavigatorParamsList>
>;
export interface IMainNavScreenProps {
  navigation: MainNavigationType;
}
