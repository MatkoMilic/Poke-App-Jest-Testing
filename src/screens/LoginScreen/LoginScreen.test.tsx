import 'jsdom-global/register';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-native/extend-expect';
import {configure, mount, shallow} from 'enzyme';
import React from 'react';
import renderer, {ReactTestInstance} from 'react-test-renderer';
import {OnboardingNavigationType} from '../../types';
import LoginScreen from './LoginScreen';
import {
  ErrorMessage,
  Formik,
  FormikErrors,
  FormikValues,
  FormikHelpers,
} from 'formik';
import {
  fireEvent,
  render,
  RenderAPI,
  within,
  waitFor,
  cleanup,
} from '@testing-library/react-native';
import Adapter from 'enzyme-adapter-react-16';
import {InputField, LoginForm} from '../../components';
import {Button, TextInput} from 'react-native-paper';
import {any} from 'jest-mock-extended';
import {Text} from 'react-native';
import {useOnSubmit} from '../../utils';
import {findFocusedRoute} from '@react-navigation/native';
configure({adapter: new Adapter()});

afterEach(cleanup);

interface IFormikValues {
  email: string;
  password: string;
}

let renderLoginForm: RenderAPI;
let renderLoginScreen: RenderAPI;
let mountLoginForm: any;
let fakeUser: {email: 'matkomilic@gmail.com'; password: 'Piranha22&'};
let emailNode: ReactTestInstance;
let passwordNode: ReactTestInstance;
let loginButtonNode: ReactTestInstance;
const initialValues = {email: '', password: ''};

//let onSubmitMock = (initialValues: typeof initialValues) => typeof onSubmit(initialValues.email, initialValues.password);
// let onSubmitCustomHookMock = (initialValues: IFormikValues) => {
//   onSubmit(initialValues.email, initialValues.password);
// };
//let onSubmitMock: () => void;

let onChange: () => void;
let errors: FormikErrors<IFormikValues> = {};
let navigation: Partial<OnboardingNavigationType>;
navigation = {
  dispatch: jest.fn(),
};
const {onSubmitRedirect} = useOnSubmit(navigation as OnboardingNavigationType);
beforeEach(async () => {
  navigation = {
    dispatch: jest.fn(),
  };
  //onSubmitMock = jest.fn();
  onChange = jest.fn();
});
describe('LoginScreen', () => {
  test('LoginScreen renders correctly', () => {
    const createLoginScreen = renderer
      .create(
        <LoginScreen navigation={navigation as OnboardingNavigationType} />,
      )
      .toJSON();
    expect(createLoginScreen).toMatchSnapshot();
  });
});

describe('Formik', () => {
  test('Formik renders inside login screen', () => {
    const mountLoginScreen = mount(
      <LoginScreen navigation={navigation as OnboardingNavigationType} />,
    );
    expect(mountLoginScreen.find('Formik')).toHaveLength(1);
  });
});

describe('Formik initial values', () => {
  test('Formik test are initial values what is expected', () => {
    const mountLoginScreen = mount(
      <LoginScreen navigation={navigation as OnboardingNavigationType} />,
    );
    expect(mountLoginScreen.find(Formik).props().initialValues).toEqual({
      email: '',
      password: '',
    });
  });
});

describe('Formik CHANGE values', () => {
  test('test are values successfully changed', async () => {
    const mountLoginScreen = mount(
      <LoginScreen navigation={navigation as OnboardingNavigationType} />,
    );
    const handleSubmitMock = jest.fn();
    const passHandleSubmitonPress = jest.fn();
    const passHandleSubmit = jest.fn();
    const onChangeTextMock = jest.fn();
    const defaultLoginFormProps = {
      errors: errors,
      values: {email: '', password: ''},
    };
    const mountLoginForm = mount(
      <LoginForm
        {...defaultLoginFormProps}
        handleSubmit={handleSubmitMock}
        handleChange={passHandleSubmit}
      />,
    );
    const renderInputField = render(
      <InputField onChangeText={onChangeTextMock} />,
    );

    const errorText = mountLoginForm.find(Text).first().text();
    const onSubmitMockFunc = jest.fn();
    mountLoginScreen.find(InputField).first().props().value =
      'imatkomilic@gmail.com';

    mountLoginScreen.find(InputField).at(1).props().value = 'pokeApi2021';

    const renderFormik = render(
      <Formik initialValues={initialValues} onSubmit={onSubmitMockFunc} />,
    );
    const emailInputField = mountLoginScreen
      .find(InputField)
      .first()
      .props().value;

    const passwordInputField = mountLoginScreen
      .find(InputField)
      .at(1)
      .props().value;
    const renderLoginForm = render(
      <LoginForm
        {...defaultLoginFormProps}
        handleSubmit={handleSubmitMock(emailInputField, passwordInputField)}
        handleChange={passHandleSubmit}
      />,
    );
    const inputFieldEmail =
      renderLoginForm.getByPlaceholderText('Your email please');

    fireEvent.changeText(inputFieldEmail, {target: {value: '1231 Warner Ave'}});
    fireEvent.changeText(inputFieldEmail, {value: '1231 Warner Ave'});
    fireEvent.changeText(inputFieldEmail, '1231 Warner Ave');
    fireEvent.changeText(inputFieldEmail, '1231 Warner Ave');

    const pressButton = mountLoginScreen.find(Button).props().onPress;
    const renderRNPbutton = render(
      <Button onPress={passHandleSubmitonPress}>Test button</Button>,
    );
    fireEvent.press(renderRNPbutton.getByText('Test button'));
    if (pressButton) {
      pressButton();
    }

    const {getByTestId} = render(
      <LoginForm
        {...defaultLoginFormProps}
        handleSubmit={handleSubmitMock(emailInputField, passwordInputField)}
        handleChange={passHandleSubmit}
      />,
    );
    fireEvent.changeText(getByTestId('InputFieldEmail'), 'Hello World');
    fireEvent(
      renderLoginForm.getByPlaceholderText('Your email please'),
      'onChangeText',
      'ab',
    );

    fireEvent(
      renderLoginForm.getByPlaceholderText('Your email please'),
      'value',
      'matkomilic',
    );

    const buttonHandleSubmit = await waitFor(
      () => renderLoginForm.getByTestId('buttonHandleSubmit'),
      fireEvent.press(getByTestId('buttonHandleSubmit')),
    );
    fireEvent.press(buttonHandleSubmit);

    await waitFor(() => {
      //expect(mountLoginScreen.find(InputField).first().props().value).toBe('imatkomilic@gmail.com',);
      //expect(onChangeTextMock).toHaveBeenCalled();
      //expect(passHandleSubmit).toHaveBeenCalledWith();
      expect(passwordInputField).toBe('pokeApi2021');
      //expect(inputFieldEmail).toBeDefined();
      //expect(passHandleSubmitonPress).toHaveBeenCalled();
      expect(handleSubmitMock).toHaveBeenCalledWith(
        'imatkomilic@gmail.com',
        'pokeApi2021',
      );
    });
  });
});

//<Formik initialValues={initialValues} onSubmit={onSubmitMock} />,

// let fakeUser: { email: 'matkomilic@gmail.com'; password: 'Piranha22$' };
// let emailNode: any;
// let passwordNode: any;
// let loginButtonNode: any;
// let renderLoginForm: RenderAPI;
// const mockHandleChange = jest.fn();
// const mockHandleSubmit = jest.fn();
// interface FormikValues {
//   email: string;
//   password: string;
// }
// let errors: FormikErrors<FormikValues> = {};

// let submitLogin: () => void;

//     beforeEach(() => {
//       submitLogin = jest.fn();

//       const props = {
//         submitLogin
//       };
//       const defaultLoginFormProps = {
//         errors: errors,
//         values: {email: '', password: ''},
//         handleSubmit: mockHandleSubmit,
//       };
//       renderLoginForm = render(
//         <LoginForm {...defaultLoginFormProps} handleChange={mockHandleChange} />,
//       );
//       emailNode = re.getByPlaceholderText(
//         "E-mail address"
//       ) as HTMLInputElement;
//       passwordNode = renderLoginForm.getByPlaceholderText(
//         "Password"
//       ) as HTMLInputElement;
// let navigation: Partial<OnboardingNavigationType>;
// afterEach(cleanup);

// const setupForTesting = () => {
//   const renderLoginForm = render(
//     <LoginForm {...defaultLoginFormProps} handleChange={mockHandleChange} />,
//   );
//   const {getByTestId, getByText} = renderLoginForm;
//   const inputFieldEmail = getByTestId('InputFieldEmail');
//   //const InputFieldPassword = getByTestId('InputFieldPassword');
//   const submitButton = getByTestId('buttonHandleSubmit');

//   return {
//     renderLoginForm,
//     inputFieldEmail,
//     //InputFieldPassword,
//     submitButton,
//   };
// };

// beforeEach(() => {
//   navigation = {
//     dispatch: jest.fn(),
//   };
//   //const { renderLoginForm, inputFieldEmail, InputFieldPassword, submitButton } = setupForTesting();
// });
// it('login form', async () => {
//   const {
//     renderLoginForm,
//     inputFieldEmail,
//     //InputFieldPassword,
//     submitButton,
//   } = setupForTesting();

//   const {getByTestId} = render(
//     <LoginForm {...defaultLoginFormProps} handleChange={mockHandleChange} />,
//   );
//   const input = getByTestId('InputFieldEmail')
//   const buttonHandleSubmit = getByTestId('buttonHandleSubmit')
// fireEvent.press(buttonHandleSubmit);
//   buttonHandleSubmit
//   fireEvent.changeText(input, 'matko');

//   const mountLoginForm = mount(
//     <LoginForm
//       {...defaultLoginFormProps}
//       handleChange={mockHandleChange('email')}
//     />,
//   );
//   //inputFieldEmail.props.value;
//   const valuePropInputField = mountLoginForm.find(InputField).props().value;

//     const onsubmit = mountLoginForm.find(Button).props().onPress;

//   if(onsubmit){
//     onsubmit();
// }
//   const b = renderLoginForm.getByPlaceholderText('Your email please');
//   console.log(valuePropInputField);
//   //console.log()
//   //const n = inputFieldEmail.
//   //console.log(n);
// await waitFor(() => {
//   expect(valuePropInputField).toBe('matko');

// })

//   //fireEvent.change(passwordInput, { target: { value: 'testpwd1234' } });
//   //expect(passwordInput.value).toBe('testpwd1234');

//   //fireEvent.click(submitButton);
//   //expect(mockSubmit).toHaveBeenCalledTimes(1);
// });

// test('login screen renders correctly', () => {
//   const tree = renderer
//     .create(<LoginScreen navigation={navigation as OnboardingNavigationType} />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });
// test('test submit', () => {
//   const mockHandleSubmit = jest.fn();
//   //const mountFormik = mount(<LoginScreen navigation={navigation as OnboardingNavigationType} />)
//   //renderLoginForm. find(Formik).prop('onSubmit')(args)
//   const mountFormik = mount(
//     <Formik
//       onSubmit={mockHandleSubmit}
//       initialValues={{email: '', password: ''}}
//     />,
//   );
//   //mountFormik.find(Formik).props().onSubmit();

//   mountFormik.find('Formik').prop('onSubmit');
//   //expect().toMatchSnapshot();
// });
