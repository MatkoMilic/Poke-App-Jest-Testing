import React, {FC} from 'react';
import {Switch, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeContext} from '../../components';
import style from './styles';
import {IOnboardingNavScreenProps} from '../../types';

interface LoadingScreenProps extends IOnboardingNavScreenProps {}

const LoadingScreen: FC = () => {
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(ThemeContext);
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Switch
          style={style.switchElement}
          value={isThemeDark}
          onValueChange={toggleTheme}
        />
      </TouchableOpacity>
      <Text style={{color: 'red'}}>
        Loading & theme is: {isThemeDark ? 'dark' : 'light'}
      </Text>
    </SafeAreaView>
  );
};

export default LoadingScreen;
