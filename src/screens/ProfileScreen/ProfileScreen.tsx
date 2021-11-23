import React from 'react';
import {Text} from 'react-native';
import {Header, ScreenContainer} from '../../components';
import {IMainNavScreenProps, MainNavigatorScreens} from '../../types';
import {PokeListScreen} from '../PokeListScreen';

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
        leftOnPress={goToPokeList}
        rightOnPress={goToSettings}
      />
      <Text>Welcome to profile screen</Text>
    </ScreenContainer>
  );
};

export default ProfileScreen;
