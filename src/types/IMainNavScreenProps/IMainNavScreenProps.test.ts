import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootNavigatorType, MainNavigatorParamList} from '../navigatorTypes';
import {IMainNavScreenProps} from './IMainNavScreenProps';

var mainNavNavigation: CompositeNavigationProp<
  NativeStackNavigationProp<MainNavigatorParamList>,
  NativeStackNavigationProp<RootNavigatorType>
>;

describe('IMainNavScreenProps', () => {
  it('has a navigation that equals expected state', () => {
    const testNavigation: IMainNavScreenProps = {
      navigation: mainNavNavigation,
    };
    expect(testNavigation.navigation).toStrictEqual(mainNavNavigation);
  });
});
