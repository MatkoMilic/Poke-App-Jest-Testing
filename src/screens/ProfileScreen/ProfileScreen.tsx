import React from 'react';
import {Text} from 'react-native';
import {Header, ScreenContainer} from '../../components';
import {IMainNavScreenProps, MainNavigatorScreens} from '../../types';

interface ProfileScreenProps extends IMainNavScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const goToSettings = () => {
    navigation.navigate(MainNavigatorScreens.SETTINGS_SCREEN);
  };
  const goToPokeList = () => {
    navigation.navigate(MainNavigatorScreens.POKELIST_SCREEN);
  };
  return (
    <ScreenContainer>
      <Header
        headerTitle="Poke Profile"
        leftIcon="account-cog"
        rightIcon="clipboard-list"
        headerSubtitle="2front"
        leftOnPress={goToSettings}
        rightOnPress={goToPokeList}
      />
      <Text testID={'profileScreenText'}>Welcome to profile screen</Text>
    </ScreenContainer>
  );
};

export default ProfileScreen;
