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

type ScreenComponent = {
  name: string,
  component: React.Component | React.PureComponent
};

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
  }
];

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

function registerScreen({ name, component }: ScreenComponent) {
  Navigation.registerComponent(name, () => withStatusBar(component));
}

function registerScreens() {
  withStatusBarScreens.forEach((screen: ScreenComponent) => registerScreen(screen));
}

export default registerScreens;
