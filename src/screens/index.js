/**
 * @flow
 */

import React from 'react';
import { View, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Home from './Home';
import Search from './Search';
import Chat from './Chat';
import Account from './Account';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import Projects from './Projects';
import Exchange from './Exchange';
import ForRent from './ForRent';

type ScreenComponent = {
  name: string,
  component: React.Component | React.PureComponent
};

function registerScreens() {
  withStatusBarScreens.forEach((screen: ScreenComponent) => registerScreen(screen));
}

function registerScreen({ name, component }: ScreenComponent) {
  Navigation.registerComponent(name, () => withStatusBar(component));
}

function withStatusBar(Component: React.Component | React.PureComponent) {
  return (props) => {
    if (Platform.OS === 'android') {
      return <Component {...props} />;
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <Component {...props} />
      </View>
    );
  };
}

const withStatusBarScreens: [ScreenComponent] = [
  {
    name: 'LeftMenu',
    component: LeftMenu
  },
  {
    name: 'RightMenu',
    component: RightMenu
  },
  {
    name: 'Home',
    component: Home
  },
  {
    name: 'Search',
    component: Search
  },
  {
    name: 'Chat',
    component: Chat
  },
  {
    name: 'Account',
    component: Account
  },
  {
    name: 'Projects',
    component: Projects
  },
  {
    name: 'Exchange',
    component: Exchange
  },
  {
    name: 'ForRent',
    component: ForRent
  }
];

export default registerScreens;
