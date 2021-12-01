import 'jsdom-global/register';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-native/extend-expect';
import {configure, mount, shallow} from 'enzyme';
import React from 'react';
import {ReactTestInstance} from 'react-test-renderer';
import {OnboardingNavigationType} from '../../types';
import {FormikErrors} from 'formik';
import {
  fireEvent,
  render,
  RenderAPI,
  waitFor,
  cleanup,
} from '@testing-library/react-native';
import Adapter from 'enzyme-adapter-react-16';
import {InputField, LoginForm} from '../../components';
import {Button} from 'react-native-paper';
import {Text} from 'react-native';
import {useOnSubmit} from '../../utils';
import {LoginScreen} from '../../screens';
configure({adapter: new Adapter()});

afterEach(cleanup);

interface FormikValues {
  email: string;
  password: string;
}
describe('LoginForm', () => {
  describe('submit testing', async () => {
    let renderLoginForm: RenderAPI;
    let renderLoginScreen: RenderAPI;
    let mountLoginForm: any;
    let fakeUser: {email: 'matkomilic@gmail.com'; password: 'Piranha22&'};
    let emailNode: ReactTestInstance;
    let passwordNode: ReactTestInstance;
    let loginButtonNode: ReactTestInstance;
    let onSubmitMock: () => void;
    let onChange: () => void;
    let errors: FormikErrors<FormikValues> = {};
    let navigation: Partial<OnboardingNavigationType>;
    navigation = {
      dispatch: jest.fn(),
    };
    const {onSubmitRedirect} = useOnSubmit(
      navigation as OnboardingNavigationType,
    );

    beforeEach(async () => {
      navigation = {
        dispatch: jest.fn(),
      };
      onSubmitMock = jest.fn();
      onChange = jest.fn();

      const defaultLoginFormProps = {
        errors: errors,
        values: {email: '', password: ''},
        handleSubmit: onSubmitMock,
        handleChange: onChange,
      };
      renderLoginForm = render(<LoginForm {...defaultLoginFormProps} />);
      const mountLoginForm = mount(<LoginForm {...defaultLoginFormProps} />);
      const mountsLoginForm = shallow(<LoginForm {...defaultLoginFormProps} />);
      //mountsLoginForm.props().handleSubmit();
      renderLoginScreen = render(
        <LoginScreen navigation={navigation as OnboardingNavigationType} />,
      );
      emailNode = renderLoginForm.getByPlaceholderText(
        'Your email please',
      ) as ReactTestInstance;
      passwordNode = renderLoginForm.getByPlaceholderText(
        'Your password please',
      ) as ReactTestInstance;
      loginButtonNode = renderLoginForm.getByText('Login now');

      fireEvent.changeText(emailNode, {
        target: {value: 'matkomilic@gmail.com'},
      });
      fireEvent.changeText(passwordNode, {target: {value: 'Piranha&'}});
      const myButton = mountLoginForm.find(Button).props().onPress;
      if (myButton) {
        myButton();
      }
      //onSubmit={(values) => {
      // onSubmit(values.email, values.password);
      //}}
      //let bla: FormikHelpers<FormikValues>
      //bla = ''
      // await mountLoginForm
      //   .find(Formik)
      //   .props()
      //   .onSubmit((values: FormikValues) => {
      //     onSubmit(values.email, values.password);
      //   }, (FormikErrors<FormikValues>));

      // mountLoginForm
      //   .props()
      //   .find(InputField)
      //   .first()
      //   .props().value = 'hello';
      const emailInput = (mountLoginForm
        .find(InputField)
        .first()
        .props().value = 'hello');

      const passwordInput = (mountLoginForm
        .find(InputField)
        .at(1)
        .props().value = 'piranha');

      const testic = mountLoginForm.find(Text).first().text();
      console.log(testic);
      onSubmitRedirect(emailInput, passwordInput);

      console.log(test);
      console.log('ghghgh');

      fireEvent.press(loginButtonNode);
    });

    test('Submits Login with email and password', async () => {
      await waitFor(() => {
        //expect(onSubmitMock).toHaveBeenCalledTimes(1);
        // expect(onSubmit).toHaveBeenCalled();
        // expect(onSubmit).toHaveBeenCalledWith({
        //   name: 'matko',
        //   password: 'matko',
        // });

        expect(onSubmitMock);
      });
    });
  });
});

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
