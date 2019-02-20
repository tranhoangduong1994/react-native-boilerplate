/**
 * @flow
 */

import { Navigation } from 'react-native-navigation';
import codePush from 'react-native-code-push';
import registerScreens from '../screens';
import { setI18nConfig, RNLocalize } from '../utils/LocalizationUtils';
import { buildTheme } from '../themes/config-theme';
import createCenterMenu from './Center';
import createLeftMenu from './Left';
import createRightMenu from './Right';
import images from '../../assets/images';

let isFirstTime: boolean = true;

Navigation.events().registerAppLaunchedListener(() => {
  if (isFirstTime) {
    isFirstTime = false;
    init();
  }
  startApp();
});

function init() {
  codePush.notifyAppReady();
  buildTheme();
  registerScreens();
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
        // center: createCenterMenu(),
        right: createRightMenu(),
        center: {
          stack: {
            id: 'centerStack',
            children: [
              {
                bottomTabs: {
                  children: [
                    {
                      component: {
                        name: 'Home',
                        options: {
                          topBar: {
                            visible: false,
                            height: 0
                          },
                          bottomTab: {
                            text: 'Home',
                            icon: images.home
                          }
                        }
                      }
                    },
                    {
                      component: {
                        name: 'Search',
                        options: {
                          topBar: {
                            visible: false,
                            height: 0
                          },
                          bottomTab: {
                            text: 'Search',
                            icon: images.search
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      }
    }
  });
}
