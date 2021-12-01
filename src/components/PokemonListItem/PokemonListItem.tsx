import React from 'react';
import {Text, View} from 'react-native';
import {IPokemon} from '../../types';
import {styles} from './styles';

interface PokemonItemProps {
  dataPokemon: IPokemon;
}

const PokemonListItem: React.FC<PokemonItemProps> = ({dataPokemon}) => {
  return (
    <View>
      <Text style={styles.pokemonListItem}>{dataPokemon.name}</Text>
    </View>
  );
};

export default PokemonListItem;
