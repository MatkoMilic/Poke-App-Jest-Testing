import React from 'react';
import {Text, TouchableOpacity, Switch} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import {Header, ScreenContainer, ThemeContext} from '../../components';
import {removeActiveUser} from '../../constants';
import {
  IMainNavScreenProps,
  MainNavigatorScreens,
  NavigatorNames,
  OnboardingNavigatorScreens,
} from '../../types';
import styles from './styles';

interface SettingsScreenProps extends IMainNavScreenProps {}

const SettingsScreen: React.FC<SettingsScreenProps> = ({navigation}) => {
  const goToProfile = () => {
    navigation.navigate(MainNavigatorScreens.PROFILE_SCREEN);
  };
  const goToPokeList = () => {
    navigation.navigate(MainNavigatorScreens.POKELIST_SCREEN);
  };
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(ThemeContext);

  const logoutUser = async () => {
    removeActiveUser();
    navigation.replace(NavigatorNames.ONBOARDING_NAVIGATOR, {
      screen: OnboardingNavigatorScreens.LOGIN_SCREEN,
    });
  };

  return (
    <ScreenContainer>
      <Header
        headerTitle="Poke Settings"
        leftIcon="home-account"
        rightIcon="clipboard-list"
        headerSubtitle="2front"
        leftOnPress={goToProfile}
        rightOnPress={goToPokeList}
      />
      <TouchableOpacity>
        <Switch
          testID="testSwitch"
          style={styles.switchElement}
          value={isThemeDark}
          onValueChange={toggleTheme}
        />
      </TouchableOpacity>
      <Text testID={'isThemeDarkText'} style={styles.themeText_TESTING}>
        {`Theme at the moment is: ${isThemeDark.toString()}`}
      </Text>
      <Text>Welcome to settings</Text>
      <Button onPress={logoutUser}>LOG OUT</Button>
    </ScreenContainer>
  );
};

export default SettingsScreen;
