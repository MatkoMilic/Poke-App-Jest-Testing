import 'jsdom-global/register';
import React from 'react';
import {render} from '@testing-library/react-native';
import {configure, mount, ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import {ReactTestRendererJSON} from 'react-test-renderer';
import renderer from 'react-test-renderer';
import {MainNavigationType, MainNavigatorScreens} from '../../types';
configure({adapter: new Adapter()});

let navigation: MainNavigationType;
const goToSettings = () => {
  navigation.navigate(MainNavigatorScreens.SETTINGS_SCREEN);
};

describe('ThemeProvider', () => {
  let renderHeader: ReactTestRendererJSON | ReactTestRendererJSON[] | null;
  let mountHeader: any;
  let createHeader: ReactTestRendererJSON | ReactTestRendererJSON[] | null;
  beforeEach(() => {
    mountHeader = mount(<Header></Header>);
    //mountHeader = mount(<Header></Header>);
    createHeader = renderer
      .create(
        <Header
          goToScreenLeftIcon={goToSettings}
          headerTitle="Poke Profile"
          leftIcon="account-cog"
          rightIcon="clipboard-list"
          headerSubtitle="2front"
        />,
      )
      .toJSON();
    expect(createHeader).toMatchSnapshot();
    renderHeader = render(<Header></Header>).toJSON();
  });
  it('does header mount', async () => {
    expect(mountHeader).toBeDefined();
  });
  it('does header render', () => {
    expect(renderHeader).toBeDefined();
  });
  it('does header unmount', () => {
    mountHeader.unmount();
    expect(mountHeader.exists()).toBeFalsy();
  });
  it('does header show children', () => {
    expect(createHeader).toMatchSnapshot();
  });
  it('onPress children test', () => {
    //expect(mountHeader).toMatchSnapshot();
  });
});
