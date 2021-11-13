import React from 'react';
import {RootNavigator} from './navigators';
import {NavigationProvider, ThemeProvider} from './components';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <RootNavigator />
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default App;
