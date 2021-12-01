import 'jsdom-global/register';
import React from 'react';
import {render} from '@testing-library/react-native';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import renderer from 'react-test-renderer';
import {MainNavigationType, MainNavigatorScreens} from '../../types';
configure({adapter: new Adapter()});

describe('Header', () => {
  const leftPressMock = jest.fn();
  const rightPressMock = jest.fn();
  let navigation: MainNavigationType;
  const goToSettings = () => {
    navigation.navigate(MainNavigatorScreens.SETTINGS_SCREEN);
  };

  it('does header mount', async () => {
    const mountHeader = mount(<Header />);
    expect(mountHeader).toBeDefined();
  });
  it('does header render', () => {
    const renderHeader = render(<Header />).toJSON();
    expect(renderHeader).toBeDefined();
  });
  it('does header unmount', () => {
    const mountHeader = mount(<Header />);
    mountHeader.unmount();
    expect(mountHeader.exists()).toBeFalsy();
  });
  it('does header show children', () => {
    const createHeader = renderer
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
  it('check is leftOnPress called inside Header', () => {
    const mountHeaderLeftPress = mount(<Header leftOnPress={leftPressMock} />);
    const leftOnPressProp = mountHeaderLeftPress
      .find(Header)
      .props().leftOnPress;
    if (leftOnPressProp) {
      leftOnPressProp();
    }
    expect(leftPressMock).toHaveBeenCalled();
  });
  it('check is rightOnPress called inside Header', () => {
    const mountHeaderRightPress = mount(
      <Header rightOnPress={rightPressMock} />,
    );
    const rightOnPressProp = mountHeaderRightPress
      .find(Header)
      .props().rightOnPress;
    if (rightOnPressProp) {
      rightOnPressProp();
    }
    expect(rightPressMock).toHaveBeenCalled();
  });
  it('test does header render only with title and without other props', () => {
    const mountHeaderTitle = mount(<Header headerTitle={'TestTitle'} />);
    expect(mountHeaderTitle.find(Header).props().headerTitle).toBeDefined();
    expect(mountHeaderTitle.find(Header).props().leftOnPress).toBeUndefined();
    expect(mountHeaderTitle.find(Header).props().rightOnPress).toBeUndefined();
    expect(mountHeaderTitle.find(Header).props().leftIcon).toBeUndefined();
    expect(mountHeaderTitle.find(Header).props().rightIcon).toBeUndefined();
    expect(mountHeaderTitle).toBeTruthy();
  });
  it('test does header render only with leftOnPress and without other props', () => {
    const mountHeaderLeftPress = mount(<Header leftOnPress={leftPressMock} />);
    expect(mountHeaderLeftPress.find(Header).props().leftOnPress).toBeDefined();
    expect(
      mountHeaderLeftPress.find(Header).props().headerTitle,
    ).toBeUndefined();
    expect(
      mountHeaderLeftPress.find(Header).props().rightOnPress,
    ).toBeUndefined();
    expect(mountHeaderLeftPress.find(Header).props().leftIcon).toBeUndefined();
    expect(mountHeaderLeftPress.find(Header).props().rightIcon).toBeUndefined();
    expect(mountHeaderLeftPress).toBeTruthy();
  });
  it('test does header render only with rightOnPress and without other props', () => {
    const mountHeaderRightPress = mount(
      <Header rightOnPress={rightPressMock} />,
    );
    expect(
      mountHeaderRightPress.find(Header).props().rightOnPress,
    ).toBeDefined();
    expect(
      mountHeaderRightPress.find(Header).props().headerTitle,
    ).toBeUndefined();
    expect(
      mountHeaderRightPress.find(Header).props().leftOnPress,
    ).toBeUndefined();
    expect(mountHeaderRightPress.find(Header).props().leftIcon).toBeUndefined();
    expect(
      mountHeaderRightPress.find(Header).props().rightIcon,
    ).toBeUndefined();
    expect(mountHeaderRightPress).toBeTruthy();
  });
  it('test does header render only with leftIcon and without other props', () => {
    const mountLeftIcon = mount(
      <Header leftIcon={'TestWithWrongLeftIconName'} />,
    );
    expect(mountLeftIcon.find(Header).props().leftIcon).toBeDefined();
    expect(mountLeftIcon.find(Header).props().leftOnPress).toBeUndefined();
    expect(mountLeftIcon.find(Header).props().rightOnPress).toBeUndefined();
    expect(mountLeftIcon.find(Header).props().headerTitle).toBeUndefined();
    expect(mountLeftIcon.find(Header).props().rightIcon).toBeUndefined();
    expect(mountLeftIcon).toBeTruthy();
  });
  it('test does header render only with rightIcon and without other props', () => {
    const mountRightIcon = mount(
      <Header rightIcon={'TestWithWrongRightIconName'} />,
    );
    expect(mountRightIcon.find(Header).props().rightIcon).toBeDefined();
    expect(mountRightIcon.find(Header).props().leftOnPress).toBeUndefined();
    expect(mountRightIcon.find(Header).props().rightOnPress).toBeUndefined();
    expect(mountRightIcon.find(Header).props().headerTitle).toBeUndefined();
    expect(mountRightIcon.find(Header).props().leftIcon).toBeUndefined();
    expect(mountRightIcon).toBeTruthy();
  });
});
