import {useQuery} from 'react-query';
import {urls} from '../../constants';
import {IPokemon, RQStatusType} from '../../types';

interface IusePokemons {
  error: ErrorConstructor | null;
  status: RQStatusType;
  data: IPokemon[] | undefined;
}

const usePokemons = (): IusePokemons => {
  const abortController = new AbortController();

  const fetchingPokemons = async (): Promise<IPokemon[]> => {
    try {
      const response = await fetch(urls.pokemonsUrl, {
        signal: abortController.signal,
      });
      const json = await response.json();
      return json.results;
    } catch (error) {
      throw new Error(error);
    }
  };

  const {data, status, error} = useQuery<IPokemon[], ErrorConstructor>(
    'pokemons',
    fetchingPokemons,
  );
  return {status, data, error};
};

export default usePokemons;
