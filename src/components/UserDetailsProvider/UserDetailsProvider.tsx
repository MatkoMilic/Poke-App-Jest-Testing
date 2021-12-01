import React, {FC, useEffect, useState} from 'react';
import {getActiveUserDetails} from '../../constants';
import {initialUserLoginValues, IUserValues} from '../../types';

interface UserDetailsProviderProps {
  children?: React.ReactNode;
}

const defaultUserValues = initialUserLoginValues();

export const UserDetailsContext =
  React.createContext<IUserValues>(defaultUserValues);

export const UserDetailsProvider: FC<UserDetailsProviderProps> = ({
  children,
}) => {
  const [currentUserData, setCurrentUserData] =
    useState<IUserValues>(defaultUserValues);
  const setUserDetails = async () => {
    const loggedUserValues = await getActiveUserDetails();
    if (loggedUserValues) {
      setCurrentUserData(loggedUserValues);
    }
  };

  useEffect(() => {
    setUserDetails();
  }, []);

  const details = React.useMemo<IUserValues>(
    () => currentUserData,
    [currentUserData],
  );
  return (
    <UserDetailsContext.Provider value={details}>
      {children}
    </UserDetailsContext.Provider>
  );
};

UserDetailsProvider.defaultProps = {
  children: undefined,
};
