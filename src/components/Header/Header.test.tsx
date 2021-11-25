import 'jsdom-global/register';
import React from 'react';
import {render} from '@testing-library/react-native';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import {ReactTestRendererJSON} from 'react-test-renderer';
import renderer from 'react-test-renderer';
import {MainNavigationType, MainNavigatorScreens} from '../../types';
configure({adapter: new Adapter()});

const leftPressMock = jest.fn();
const rightPressMock = jest.fn();

let navigation: MainNavigationType;
const goToSettings = () => {
  navigation.navigate(MainNavigatorScreens.SETTINGS_SCREEN);
};

describe('Header', () => {
  let renderHeader: ReactTestRendererJSON | ReactTestRendererJSON[] | null;
  let mountHeaderLeftPress: any;
  let mountHeaderRightPress: any;
  let mountHeaderTitle: any;
  let mountLeftIcon: any;
  let mountRightIcon: any;
  let mountHeader: any;
  let createHeader: ReactTestRendererJSON | ReactTestRendererJSON[] | null;
  beforeEach(() => {
    mountHeaderLeftPress = mount(<Header leftOnPress={leftPressMock} />);
    mountHeaderRightPress = mount(<Header rightOnPress={rightPressMock} />);
    mountLeftIcon = mount(<Header leftIcon={'TestWithWrongLeftIconName'} />);
    mountRightIcon = mount(<Header rightIcon={'TestWithWrongRightIconName'} />);
    mountHeaderTitle = mount(<Header headerTitle={'TestTitle'} />);
    mountHeader = mount(<Header />);
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
  it('check is leftOnPress called inside Header', () => {
    mountHeaderLeftPress.find(Header).first().props().leftOnPress();
    expect(leftPressMock).toHaveBeenCalled();
  });
  it('check is rightOnPress called inside Header', () => {
    mountHeaderRightPress.find(Header).first().props().rightOnPress();
    expect(rightPressMock).toHaveBeenCalled();
  });
  it('test does header render only with title and without other props', () => {
    expect(mountHeaderTitle.props().headerTitle).toBeDefined();
    expect(mountHeaderTitle.props().leftOnPress).toBeUndefined();
    expect(mountHeaderTitle.props().rightOnPress).toBeUndefined();
    expect(mountHeaderTitle.props().leftIcon).toBeUndefined();
    expect(mountHeaderTitle.props().rightIcon).toBeUndefined();
    expect(mountHeaderTitle).toBeTruthy();
  });
  it('test does header render only with leftOnPress and without other props', () => {
    expect(mountHeaderLeftPress.props().leftOnPress).toBeDefined();
    expect(mountHeaderLeftPress.props().headerTitle).toBeUndefined();
    expect(mountHeaderLeftPress.props().rightOnPress).toBeUndefined();
    expect(mountHeaderLeftPress.props().leftIcon).toBeUndefined();
    expect(mountHeaderLeftPress.props().rightIcon).toBeUndefined();
    expect(mountHeaderLeftPress).toBeTruthy();
  });
  it('test does header render only with rightOnPress and without other props', () => {
    expect(mountHeaderRightPress.props().rightOnPress).toBeDefined();
    expect(mountHeaderRightPress.props().headerTitle).toBeUndefined();
    expect(mountHeaderRightPress.props().leftOnPress).toBeUndefined();
    expect(mountHeaderRightPress.props().leftIcon).toBeUndefined();
    expect(mountHeaderRightPress.props().rightIcon).toBeUndefined();
    expect(mountHeaderRightPress).toBeTruthy();
  });
  it('test does header render only with leftIcon and without other props', () => {
    expect(mountLeftIcon.props().leftIcon).toBeDefined();
    expect(mountLeftIcon.props().leftOnPress).toBeUndefined();
    expect(mountLeftIcon.props().rightOnPress).toBeUndefined();
    expect(mountLeftIcon.props().headerTitle).toBeUndefined();
    expect(mountLeftIcon.props().rightIcon).toBeUndefined();
    expect(mountLeftIcon).toBeTruthy();
  });
  it('test does header render only with rightIcon and without other props', () => {
    expect(mountRightIcon.props().rightIcon).toBeDefined();
    expect(mountRightIcon.props().leftOnPress).toBeUndefined();
    expect(mountRightIcon.props().rightOnPress).toBeUndefined();
    expect(mountRightIcon.props().headerTitle).toBeUndefined();
    expect(mountRightIcon.props().leftIcon).toBeUndefined();
    expect(mountRightIcon).toBeTruthy();
  });
});
