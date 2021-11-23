import React, {FC} from 'react';
import {Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  IOnboardingNavScreenProps,
  MainNavigatorScreens,
  NavigatorNames,
} from '../../types';

interface LoadingScreenProps extends IOnboardingNavScreenProps {}

const LoadingScreen: FC<LoadingScreenProps> = ({navigation}) => {
  const goToSettings = () => {
    navigation.navigate(NavigatorNames.MAIN_NAVIGATOR, {
      screen: MainNavigatorScreens.SETTINGS_SCREEN,
    });
  };
  return (
    <SafeAreaView>
      <Button title="Go To Profile Screen" onPress={goToSettings}></Button>
    </SafeAreaView>
  );
};

export default LoadingScreen;
