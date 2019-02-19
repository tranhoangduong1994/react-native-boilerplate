import React from 'react';
import { View, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Home from './Home';
import Search from './Search';
import Chat from './Chat';
import Account from './Account';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

const withStatusBar = Component => (props) => {
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

const registerScreens = () => {
  Navigation.registerComponent('LeftMenu', () => withStatusBar(LeftMenu));
  Navigation.registerComponent('RightMenu', () => withStatusBar(RightMenu));
  Navigation.registerComponent('Home', () => withStatusBar(Home));
  Navigation.registerComponent('Search', () => withStatusBar(Search));
  Navigation.registerComponent('Chat', () => withStatusBar(Chat));
  Navigation.registerComponent('Account', () => withStatusBar(Account));
};

export default registerScreens;
