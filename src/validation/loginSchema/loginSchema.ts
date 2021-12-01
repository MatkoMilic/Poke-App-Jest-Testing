import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().label('Label').email().required(),
  password: yup
    .string()
    .label('password')
    .required()
    .min(6, 'Your password must be longer than 6 characters.')
    .max(
      20,
      'There is no need for your password to be longer than 20 characters.',
    ),
});
