import React, {FC} from 'react';
import {Button, Switch, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeContext} from '../../components';
import style from './styles';
import {
  IOnboardingNavScreenProps,
  MainNavigatorScreens,
  NavigatorNames,
} from '../../types';

interface LoadingScreenProps extends IOnboardingNavScreenProps {}

const LoadingScreen: FC<LoadingScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(ThemeContext);
  const goToProfile = () => {
    navigation.navigate(NavigatorNames.MAIN_NAVIGATOR, {
      screen: MainNavigatorScreens.PROFILE_SCREEN,
    });
  };
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
      <Button title="Go To Profile Screen" onPress={goToProfile}></Button>
    </SafeAreaView>
  );
};

export default LoadingScreen;
