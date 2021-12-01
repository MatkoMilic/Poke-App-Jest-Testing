import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

export interface IInputFieldProps extends TextInputProps {}

const InputField: React.FC<IInputFieldProps> = ({...otherProps}) => {
  return <TextInput {...otherProps} />;
};

export default InputField;
