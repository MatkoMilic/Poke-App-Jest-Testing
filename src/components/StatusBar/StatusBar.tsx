import React from 'react';
import {StatusBarProps, StatusBar as RnStatusBar} from 'react-native';
import {ThemeContext} from '../ThemeProvider';

interface IStatusBarProps extends StatusBarProps {}

const StatusBar: React.FC<IStatusBarProps> = ({...otherProps}) => {
  const {isThemeDark} = React.useContext(ThemeContext);

  return (
    <RnStatusBar
      barStyle={isThemeDark ? 'light-content' : 'dark-content'}
      animated={true}
      {...otherProps}
    />
  );
};

export default StatusBar;
