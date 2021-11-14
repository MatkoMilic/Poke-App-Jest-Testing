import React from 'react';
import {ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

interface ScreenContainerProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  style,
}): JSX.Element => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

ScreenContainer.defaultProps = {
  children: undefined,
  style: undefined,
};

export default ScreenContainer;
