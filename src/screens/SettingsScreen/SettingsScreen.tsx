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
        headerTitle="Poke Settings"
        leftIcon="clipboard-list"
        rightIcon="account-cog"
        headerSubtitle="2front"
        leftOnPress={goToPokeList}
        rightOnPress={goToProfile}
      />
      <Text>Welcome to settings</Text>
    </ScreenContainer>
  );
};

export default SettingsScreen;
