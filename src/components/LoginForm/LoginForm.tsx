import React from 'react';
import {Text, View} from 'react-native';
import {FormikProps} from 'formik';
import {Button} from 'react-native-paper';
import {InputField} from '../InputField';
import {styles} from './styles';

interface FormikValues {
  email: string;
  password: string;
}

const LoginForm: React.FC<FormikProps<FormikValues>> = ({
  handleChange,
  errors,
  values,
  handleSubmit,
}) => {
  return (
    <View>
      <InputField
        placeholder="Your email please"
        onChangeText={handleChange('email')}
        value={values.email}></InputField>
      <Text style={styles.inputErrorMessage}>{errors.email}</Text>
      <InputField
        placeholder="Your password please"
        secureTextEntry
        onChangeText={handleChange('password')}
        value={values.password}></InputField>
      <Text style={styles.inputErrorMessage}>{errors.password}</Text>
      <Button icon="account-arrow-right" color={'red'} onPress={handleSubmit}>
        Login now
      </Button>
    </View>
  );
};

export default LoginForm;
