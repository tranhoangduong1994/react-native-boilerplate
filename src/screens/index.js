import { Navigation } from 'react-native-navigation';
import Home from './Home';
import Search from './Search';
import Chat from './Chat';
import Account from './Account';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

const registerScreens = () => {
  Navigation.registerComponent('LeftMenu', () => LeftMenu);
  Navigation.registerComponent('RightMenu', () => RightMenu);
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Search', () => Search);
  Navigation.registerComponent('Chat', () => Chat);
  Navigation.registerComponent('Account', () => Account);
};

export default registerScreens;
