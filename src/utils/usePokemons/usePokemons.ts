import {useQuery} from 'react-query';
import {urls} from '../../constants';
import {IPokemon, RQStatusType} from '../../types';

interface IusePokemons {
  error: unknown;
  status: RQStatusType;
  data: IPokemon[] | undefined;
  isLoading: boolean;
}

const usePokemons = (): IusePokemons => {
  const abortController = new AbortController();
  console.log('urls.pokemonsUrl', urls.pokemonsUrl);

  const fetchingPokemons = async (): Promise<IPokemon[]> => {
    console.log('I get started');
    try {
      console.log('check');
      const response = await fetch(urls.pokemonsUrl, {
        signal: abortController.signal,
      });
      console.log(response);
      console.log('urls.pokemonsUrl', urls.pokemonsUrl);
      const json = await response.json();
      console.log('json.results in fetchingPokemons function', json.results);
      return json.results;
    } catch (error) {
      console.log('ERROR');
      throw new Error(error);
    }
  };

  const {data, status, error, isLoading} = useQuery<IPokemon[]>(
    'pokemons',
    fetchingPokemons,
    {
      onError: (error) => {
        console.log(error);
      },
      onSuccess: (data) => {
        console.log(data);
      },
    },
  );

  console.log('data in custom hook: ', data);
  console.log('error in custom hook: ', error);
  console.log('status in custom hook: ', status);

  return {status, data, error, isLoading};
};

export default usePokemons;
