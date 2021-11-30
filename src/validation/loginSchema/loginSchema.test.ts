import 'jsdom-global/register';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-native/extend-expect';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {loginSchema} from './loginSchema';
configure({adapter: new Adapter()});

const properUserCredentials = {
  email: 'imatkomilic@gmail.com',
  password: '2front2021',
};
const shortPassword = {email: 'imatkomilic@gmail.com', password: 'pi'};
const invalidEmail = {email: 'imatkomilic', password: 'pokeApp2021'};

describe('Yup test', () => {
  it('should handle validating object', async () => {
    const isValidProperUser = await loginSchema.isValid(properUserCredentials);
    expect(isValidProperUser).toEqual(true);
  });
  it('isValid should NOT equal invalid object', async () => {
    const isValidShortPassword = await loginSchema.isValid(shortPassword);
    const isValidInvalidEmail = await loginSchema.isValid(invalidEmail);
    expect(isValidShortPassword).toEqual(false);
    expect(isValidInvalidEmail).toEqual(false);
  });
  test('various different inputs that should true in isValid', async () => {
    const spacesPassword = await loginSchema.isValid({
      email: 'imatkomilic@gmail.com',
      password: '        ',
    });
    const passwordWithGermanLetters = await loginSchema.isValid({
      email: 'imatkomilic@gmail.com',
      password: 'ÜÜÖÄÖÜÖÄÖÜÄÖ',
    });
    const passwordWithDotsOnly = await loginSchema.isValid({
      email: 'imatkomilic@gmail.com',
      password: '............',
    });
    const passwordWithSymbols = await loginSchema.isValid({
      email: 'imatkomilic@gmail.com',
      password: '!"§$%&/()/&%',
    });
    const passwordWithNumbers = await loginSchema.isValid({
      email: 'imatkomilic@gmail.com',
      password: '1234567890',
    });
    const emailDotB = await loginSchema.isValid({
      email: 'imatkomilic@email.b',
      password: 'pokeApp2021',
    });
    const gmailgCo = await loginSchema.isValid({
      email: 'imatkomilic@g.co',
      password: 'pokeApp2021',
    });
    const gmailGmaCo = await loginSchema.isValid({
      email: 'imatkomilic@gma.co',
      password: 'pokeApp2021',
    });
    const gmai = await loginSchema.isValid({
      email: 'imatkomilic@gmai.c',
      password: 'pokeApp2021',
    });
    const gmailC = await loginSchema.isValid({
      email: 'imatkomilic@gmail.c',
      password: 'pokeApp2021',
    });
    expect(gmailC).toEqual(true);
    expect(gmai).toEqual(true);
    expect(gmailGmaCo).toEqual(true);
    expect(gmailgCo).toEqual(true);
    expect(emailDotB).toEqual(true);
    expect(passwordWithNumbers).toEqual(true);
    expect(passwordWithSymbols).toEqual(true);
    expect(passwordWithDotsOnly).toEqual(true);
    expect(spacesPassword).toEqual(true);
    expect(passwordWithGermanLetters).toEqual(true);
  });

  test('bad inputs that should be false in isValid', async () => {
    const shortPassword = await loginSchema.isValid({
      email: 'imatkomilic@gmail.com',
      password: 'short',
    });
    const improperEmail = await loginSchema.isValid({
      email: 'imatkomilic@email.',
      password: 'pokeApp2021',
    });
    const improperGmailCo = await loginSchema.isValid({
      email: 'imatkomilic@.co',
      password: 'pokeApp2021',
    });
    expect(shortPassword).toEqual(false);
    expect(improperGmailCo).toEqual(false);
    expect(improperEmail).toEqual(false);
  });
  test('test different bad data input', async () => {
    const onlyEmailGiven = await loginSchema.isValid({
      email: 'imatkomilic@.co',
    });
    const onlyPasswordGiven = await loginSchema.isValid({
      password: 'pokeapi202020',
    });
    const passwordAndEmailSwitched = await loginSchema.isValid({
      password: 'imatkomilic@.co',
      email: 'piranha2021',
    });
    const passWronglyNamedData = await loginSchema.isValid({
      myEmail: 'myEmail@gmail.com',
      myPassword: 'PokeApi2021',
    });
    const passStringValue = await loginSchema.isValid('stringValue');
    expect(passStringValue).toEqual(false);
    expect(onlyEmailGiven).toEqual(false);
    expect(passWronglyNamedData).toEqual(false);
    expect(onlyPasswordGiven).toEqual(false);
    expect(passwordAndEmailSwitched).toEqual(false);
  });
});
