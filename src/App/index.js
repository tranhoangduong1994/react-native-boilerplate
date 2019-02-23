/**
 * @flow
 */

import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import codePush from 'react-native-code-push';
import registerScreens from '../screens';
import { setI18nConfig, RNLocalize } from '../utils/LocalizationUtils';
import { buildTheme } from '../themes/config-theme';
import createCenterMenu from './Center';
import createLeftMenu from './Left';
import createRightMenu from './Right';
import configStore from '../store/index';

let isFirstTime: boolean = true;
let store = null;

Navigation.events().registerAppLaunchedListener(() => {
  if (isFirstTime) {
    isFirstTime = false;
    init();
  }
  startApp();
});

function handleSubscribe() {}

async function init() {
  codePush.notifyAppReady();
  buildTheme();
  store = await configStore();
  store.subscribe(handleSubscribe);
  registerScreens(store, Provider);
  setI18nConfig();
  RNLocalize.addEventListener('change', () => {
    setI18nConfig();
  });
}

function startApp() {
  Navigation.setRoot({
    root: {
      sideMenu: {
        id: 'mainSideMenu',
        left: createLeftMenu(),
        center: createCenterMenu(),
        right: createRightMenu()
      }
    }
  });
}
