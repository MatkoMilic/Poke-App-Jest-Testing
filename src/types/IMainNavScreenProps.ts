import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootNavigatorType, MainNavigatorParamList} from './navigatorTypes';

export type MainNavigationType = CompositeNavigationProp<
  NativeStackNavigationProp<MainNavigatorParamList>,
  NativeStackNavigationProp<RootNavigatorType>
>;
export interface IMainNavScreenProps {
  navigation: MainNavigationType;
}
