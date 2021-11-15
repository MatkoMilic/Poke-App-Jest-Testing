import React, {FC} from 'react';
import {Button, Switch, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeContext} from '../../components';
import {IMainNavScreenProps} from '../../types/IMainNavScreenProps';
import style from './styles';
import {NavigatorNames} from '../../types/navigatorTypes';

interface LoadingScreenProps extends IMainNavScreenProps {}

const LoadingScreen: FC<LoadingScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(ThemeContext);

  const goToProfile = () => {
    navigation.navigate(NavigatorNames.MainNavigator, {
      screen: 'PROFILE_SCREEN',
    });
  };

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
        <Button title={'Go profile'} onPress={goToProfile}></Button>
      </Text>
    </SafeAreaView>
  );
};

export default LoadingScreen;
