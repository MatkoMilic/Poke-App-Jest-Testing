import React from 'react';
import {Text} from 'react-native';
import {Header, ScreenContainer} from '../../components';
import {IMainNavScreenProps, MainNavigatorScreens} from '../../types';

interface SettingsScreenProps extends IMainNavScreenProps {}

const SettingsScreen: React.FC<SettingsScreenProps> = ({navigation}) => {
  const goToProfile = () => {
    navigation.navigate(MainNavigatorScreens.PROFILE_SCREEN);
  };
  const goToPokeList = () => {
    navigation.navigate(MainNavigatorScreens.POKELIST_SCREEN);
  };
  return (
    <ScreenContainer>
      <Header
        goToScreenLeftIcon={goToProfile}
        goToScreenRightIcon={goToPokeList}
        headerTitle="Poke Settings"
        leftIcon="home-account"
        rightIcon="clipboard-list"
        headerSubtitle="2front"
      />
      <Text>Welcome to settings</Text>
    </ScreenContainer>
  );
};

export default SettingsScreen;
