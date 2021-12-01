import React from 'react';
import {Text} from 'react-native';
import {Header, ScreenContainer} from '../../components';
import {IMainNavScreenProps, MainNavigatorScreens} from '../../types';

interface ProfileScreenProps extends IMainNavScreenProps {}

const PokeListScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const goToSettings = () => {
    navigation.navigate(MainNavigatorScreens.SETTINGS_SCREEN);
  };
  const goToProfile = () => {
    navigation.navigate(MainNavigatorScreens.PROFILE_SCREEN);
  };
  return (
    <ScreenContainer>
      <Header
        headerTitle="List of Pokemons"
        leftIcon="account-cog"
        rightIcon="clipboard-list"
        headerSubtitle="2front"
        leftOnPress={goToProfile}
        rightOnPress={goToSettings}
      />
      <Text>Welcome to poke list</Text>
    </ScreenContainer>
  );
};

export default PokeListScreen;
