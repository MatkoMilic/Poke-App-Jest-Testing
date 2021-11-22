import 'jsdom-global/register';
import React from 'react';
import {act, render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {configure, mount, ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {NavigationProvider} from './NavigationProvider';
configure({adapter: new Adapter()});

describe('ThemeProvider', () => {
  let mountNavigationProvider: ReactWrapper;
  let renderNavigationContainer: any;
  let children: React.ReactNode;
  beforeEach(() => {
    mountNavigationProvider = mount(<NavigationProvider />);
    renderNavigationContainer = render(
      <NavigationContainer>{children}</NavigationContainer>,
    ).toJSON();
  });
  it('should match snapshot', async () => {
    expect(renderNavigationContainer).toMatchSnapshot();
  });
});
