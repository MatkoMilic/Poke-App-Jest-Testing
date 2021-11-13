import React, {FC} from 'react';
import {Text} from 'react-native';
import {Switch, useTheme} from 'react-native-paper';
import {ScreenContainer, ThemeContext} from '../../components';
import style from './styles';

const LoadingScreen: FC = () => {
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(ThemeContext);

  return (
    <ScreenContainer>
      <Switch
        style={style.switchElement}
        color={theme.colors.text}
        value={isThemeDark}
        onValueChange={toggleTheme}
      />
      <Text>Loading</Text>
    </ScreenContainer>
  );
};

export default LoadingScreen;
