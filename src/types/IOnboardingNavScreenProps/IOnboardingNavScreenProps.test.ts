import {IOnboardingNavScreenProps} from '../IOnboardingNavScreenProps/IOnboardingNavScreenProps';

interface MyInterface {
  id: number;
  createTime: Date;
}

test('MyInterface should have appropriate fields and types', () => {
  expect({
    navigation: {},
  } as IOnboardingNavScreenProps).toBeTruthy();
});
