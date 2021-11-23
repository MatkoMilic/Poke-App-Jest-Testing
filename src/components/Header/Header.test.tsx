import 'jsdom-global/register';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {configure, mount, ReactWrapper, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import {ReactTestRendererJSON} from 'react-test-renderer';
import renderer from 'react-test-renderer';
import {
  MainNavigationType,
  MainNavigatorScreens,
  OnboardingNavigationType,
} from '../../types';
import {LoadingScreen, SettingsScreen} from '../../screens';
configure({adapter: new Adapter()});

const goSettingsFunc = jest.fn();
let navigation: MainNavigationType;
const goToSettings = () => {
  navigation.navigate(MainNavigatorScreens.SETTINGS_SCREEN);
};

describe('Header', () => {
  let renderHeader: ReactTestRendererJSON | ReactTestRendererJSON[] | null;
  let mountHeader: any;
  let createHeader: ReactTestRendererJSON | ReactTestRendererJSON[] | null;
  beforeEach(() => {
    mountHeader = mount(<Header leftOnPress={goSettingsFunc} />);
    renderHeader = render(<Header></Header>).toJSON();
    createHeader = renderer
      .create(
        <Header
          leftOnPress={goToSettings}
          headerTitle="Poke Profile"
          leftIcon="account-cog"
          rightIcon="clipboard-list"
          headerSubtitle="2front"
        />,
      )
      .toJSON();
    expect(createHeader).toMatchSnapshot();
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
  it('does onPress work', () => {
    mountHeader.find(Header).first().props().leftOnPress!();
    expect(goSettingsFunc).toHaveBeenCalled();
  });
});
