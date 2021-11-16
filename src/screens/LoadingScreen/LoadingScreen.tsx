import React, {FC} from 'react';
import {Switch, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeContext} from '../../components';
import style from './styles';
import {IOnboardingNavScreenProps} from '../../types/IOnboardingNavScreenProps';

interface LoadingScreenProps extends IOnboardingNavScreenProps {}

const LoadingScreen: FC = () => {
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(ThemeContext);
  return (
    <SafeAreaView>
      <TouchableOpacity testID={'touch'}>
        <Switch
          testID={'switchTheme'}
          style={style.switchElement}
          //color={theme.colors.text}
          value={isThemeDark}
          onValueChange={toggleTheme}
        />
      </TouchableOpacity>
      <Text style={{color: 'red'}} testID={'loadingText'}>
        Loading & theme is: {isThemeDark ? 'dark' : 'light'}
      </Text>
    </SafeAreaView>
  );
};

export default LoadingScreen;
