import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from '../ThemeProvider';

interface NavigationProviderProps {
  children?: React.ReactNode;
}

export const NavigationProvider: FC<NavigationProviderProps> = ({children}) => {
  const {theme} = React.useContext(ThemeContext);
  return <NavigationContainer theme={theme}>{children}</NavigationContainer>;
};

NavigationProvider.defaultProps = {
  children: undefined,
};
