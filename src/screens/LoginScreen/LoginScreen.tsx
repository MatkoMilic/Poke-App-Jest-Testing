import React from 'react';
import {Text, View} from 'react-native';
import {Formik} from 'formik';
import {LoginForm, ScreenContainer} from '../../components';
import {loginSchema} from '../../validation';
import {IOnboardingNavScreenProps} from '../../types';
import {useOnSubmit} from '../../utils';

interface LoginScreenProps extends IOnboardingNavScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const {onSubmit} = useOnSubmit(navigation);

  return (
    <ScreenContainer>
      <Text>Welcome to login</Text>
      <View>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={(values) => {
            onSubmit(values.email, values.password);
          }}
          validationSchema={loginSchema}
          component={LoginForm}
        />
      </View>
    </ScreenContainer>
  );
};

export default LoginScreen;
