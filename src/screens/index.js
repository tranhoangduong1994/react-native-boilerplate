/**
 * @flow
 */

import React from 'react';
import { View, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Home from './Home';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import Projects from './Projects';
import Exchange from './Exchange';
import ForRent from './ForRent';
import PostAdd from './Home/PostAdd';
import PostEdit from './Home/PostEdit';

type ScreenComponent = {
  name: string,
  component: React.Component | React.PureComponent
};

function registerScreens(store, provider) {
  withStatusBarScreens.forEach((screen: ScreenComponent) => registerScreen(screen, store, provider));
}

function registerScreen({ name, component }: ScreenComponent, store, provider) {
  Navigation.registerComponentWithRedux(name, () => withStatusBar(component), provider, store);
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
  },
  {
    name: 'PostAdd',
    component: PostAdd
  },
  {
    name: 'PostEdit',
    component: PostEdit
  }
];

export default registerScreens;
