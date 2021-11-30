import React from 'react';
import {RootNavigator} from './navigators';
import {NavigationProvider, ThemeProvider} from './components';
import {UserDetailsProvider} from './components/UserDetailsProvider';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <UserDetailsProvider>
        <NavigationProvider>
          <RootNavigator />
        </NavigationProvider>
      </UserDetailsProvider>
    </ThemeProvider>
  );
};

export default App;
