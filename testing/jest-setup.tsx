import React from 'react';
import {FC} from 'react';
import ReactNative, {TouchableOpacity, Text} from 'react-native';
import 'react-native-gesture-handler/jestSetup';
const mockAsyncStorage = require('@react-native-async-storage/async-storage/jest/async-storage-mock');

jest.mock('react-native/Libraries/LogBox/LogBox');
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

interface SwitchProps {
  value?: boolean;
  onValueChange?: ((value: boolean) => void | Promise<void>) | null;
  testID: string;
}

const Switch: FC<SwitchProps> = (props) => {
  const [value, setValue] = React.useState(props.value);
  return (
    <TouchableOpacity
      onPress={() => {
        props.onValueChange?.(!value);
        setValue(!value);
      }}
      testID={props.testID}>
      <Text>{value?.toString()}</Text>
    </TouchableOpacity>
  );
};

Object.defineProperty(ReactNative, 'Switch', {
  get: function () {
    return Switch;
  },
});
