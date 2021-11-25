import React from 'react';
import {Text, TouchableOpacity, Switch} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Header, ScreenContainer, ThemeContext} from '../../components';
import {IMainNavScreenProps, MainNavigatorScreens} from '../../types';
import styles from './styles';

interface SettingsScreenProps extends IMainNavScreenProps {}

const SettingsScreen: React.FC<SettingsScreenProps> = ({navigation}) => {
  const goToProfile = () => {
    navigation.navigate(MainNavigatorScreens.PROFILE_SCREEN);
  };
  const goToPokeList = () => {
    navigation.navigate(MainNavigatorScreens.POKELIST_SCREEN);
  };
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(ThemeContext);

  return (
    <ScreenContainer>
      <Header
        headerTitle="Poke Settings"
        leftIcon="clipboard-list"
        rightIcon="account-cog"
        headerSubtitle="2front"
        leftOnPress={goToPokeList}
        rightOnPress={goToProfile}
      />
      <TouchableOpacity>
        <Switch
          testID="testSwitch"
          style={styles.switchElement}
          value={isThemeDark}
          onValueChange={toggleTheme}
        />
      </TouchableOpacity>
      <Text testID={'isThemeDarkText'} style={styles.themeText_TESTING}>
        {`Theme at the moment is: ${isThemeDark.toString()}`}
      </Text>
      <Text>Welcome to settings</Text>
    </ScreenContainer>
  );
};

export default SettingsScreen;
