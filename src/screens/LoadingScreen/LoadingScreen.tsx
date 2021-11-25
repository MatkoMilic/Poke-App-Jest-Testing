import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {StatusBar, ScreenContainer} from '../../components';
import {
  IOnboardingNavScreenProps,
  MainNavigatorScreens,
  NavigatorNames,
  OnboardingNavigatorScreens,
} from '../../types';

interface LoadingScreenProps extends IOnboardingNavScreenProps {}

const LoadingScreen: React.FC<LoadingScreenProps> = ({navigation}) => {
  const theme = useTheme();

  const chooseNavigator = async () => {
    const isUserLoggedIn = await AsyncStorage.getItem('activeUser');
    if (isUserLoggedIn !== null) {
      navigation.replace(NavigatorNames.MAIN_NAVIGATOR, {
        screen: MainNavigatorScreens.PROFILE_SCREEN,
      });
    } else {
      navigation.replace(OnboardingNavigatorScreens.LOGIN_SCREEN);
    }
  };

  useEffect(() => {
    chooseNavigator();
  }, []);

  return (
    <ScreenContainer>
      <StatusBar />
      <View style={styles.titleView}>
        <Text style={[{color: theme.colors.text}, styles.titleText]}>
          Loading...please wait
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default LoadingScreen;
