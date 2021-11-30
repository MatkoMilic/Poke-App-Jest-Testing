import React from 'react';
import {Text, View} from 'react-native';
import {Formik, FormikProps} from 'formik';
import {Button} from 'react-native-paper';
import {InputField} from '../InputField';
import {styles} from './styles';
import {useOnSubmit} from '../../utils';
import {IOnboardingNavScreenProps} from '../../types';
import {loginSchema} from '../../validation';

interface FormikValues {
  email: string;
  password: string;
}
type PickFormikProps = Pick<
  FormikProps<FormikValues>,
  'handleChange' | 'errors' | 'values' | 'handleSubmit'
>;
interface LoginScreenProps extends IOnboardingNavScreenProps {}
//interface ICombinedInterface extends LoginScreenProps & PickFormikProps;
//const {onSubmit} = useOnSubmit(navigation);

const LoginForm: React.FC<PickFormikProps> = ({
  handleChange,
  errors,
  values,
  handleSubmit,
}) => {
  return (
    <View>
      <InputField
        testID="InputFieldEmail"
        placeholder="Your email please"
        onChangeText={handleChange('email')}
        value={values.email}
      />
      <Text testID={'errorEmail'} style={styles.inputErrorMessage}>
        {errors.email}
      </Text>
      <InputField
        testID="InputFieldPassword"
        placeholder="Your password please"
        secureTextEntry
        onChangeText={handleChange('password')}
        value={values.password}
      />
      <Text style={styles.inputErrorMessage}>{errors.password}</Text>
      <Button
        testID="buttonHandleSubmit"
        icon="account-arrow-right"
        color={'red'}
        onPress={handleSubmit}>
        Login now
      </Button>
    </View>
  );
};

export default LoginForm;
