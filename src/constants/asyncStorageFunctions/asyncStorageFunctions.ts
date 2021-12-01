import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUserValues} from '../../types';

export const getActiveUser = async () => {
  const activeUser = await AsyncStorage.getItem('activeUser');
  return activeUser;
};

export const removeActiveUser = async () => {
  await AsyncStorage.removeItem('activeUser');
};

export const getActiveUserDetails = async () => {
  const email = await getActiveUser();
  if (email) {
    const details = await AsyncStorage.getItem(email);
    if (details) {
      const userDetailsParsed: IUserValues = JSON.parse(details);
      return userDetailsParsed;
    }
  }
};
