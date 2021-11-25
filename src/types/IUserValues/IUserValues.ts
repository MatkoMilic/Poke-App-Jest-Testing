export interface IUserValues {
  email: string;
  favoritePokemon: string;
  password: string;
  theme: string;
}

export const initialUserLoginValues = (): IUserValues => ({
  email: '',
  password: '',
  favoritePokemon: '',
  theme: 'light',
});
