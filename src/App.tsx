import React from 'react';
import {RootNavigator} from './navigators';
import {
  NavigationProvider,
  ThemeProvider,
  RQClientProvider,
  UserDetailsProvider,
} from './components';

const App: React.FC = () => {
  return (
    <RQClientProvider>
      <ThemeProvider>
        <UserDetailsProvider>
          <NavigationProvider>
            <RootNavigator />
          </NavigationProvider>
        </UserDetailsProvider>
      </ThemeProvider>
    </RQClientProvider>
  );
};

export default App;
