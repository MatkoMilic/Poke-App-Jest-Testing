import React from 'react';
import {FlatList, ListRenderItem, Text} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {ScreenContainer, Header, PokemonListItem} from '../../components';
import {IMainNavScreenProps, IPokemon, MainNavigatorScreens} from '../../types';
import {usePokemons} from '../../utils';

interface PokeListScreenProps extends IMainNavScreenProps {}

const PokeListScreen: React.FC<PokeListScreenProps> = ({navigation}) => {
  const {status, data} = usePokemons();
  const goToProfile = () => {
    navigation.navigate(MainNavigatorScreens.PROFILE_SCREEN);
  };
  const goToSettings = () => {
    navigation.navigate(MainNavigatorScreens.SETTINGS_SCREEN);
  };
  const renderItem: ListRenderItem<IPokemon> = ({item}) => (
    <PokemonListItem dataPokemon={item} key={item.url} />
  );

  return (
    <ScreenContainer>
      <Header
        leftOnPress={goToProfile}
        rightOnPress={goToSettings}
        headerTitle="Poke List"
        leftIcon="home-account"
        rightIcon="account-cog"
        headerSubtitle="2front"
      />
      {status === 'loading' ? (
        <ActivityIndicator />
      ) : status === 'error' ? (
        <Text>Unable to process this request at the moment</Text>
      ) : status === 'success' ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      ) : null}
    </ScreenContainer>
  );
};

export default PokeListScreen;
