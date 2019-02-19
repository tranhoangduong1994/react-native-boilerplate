import { Navigation } from 'react-native-navigation';
import registerScreens from './src/screens';
import images from './assets/images';
import { setI18nConfig, RNLocalize, t } from './src/utils/LocalizationUtils';
import { buildTheme } from './src/themes/config-theme';

const startApp = () => {
  Navigation.setDefaultOptions({
    statusBar: {
      style: 'light'
    },
    layout: {
      orientation: ['portrait']
    },
    topBar: {
      visible: false,
      height: 0
    }
  });

  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: 'LeftMenu'
          }
        },
        center: {
          bottomTabs: {
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'Home'
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      text: t('tabs.Home'),
                      icon: images.home
                    }
                  }
                }
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'Search'
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      text: t('tabs.Search'),
                      icon: images.search
                    }
                  }
                }
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'Chat'
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      text: t('tabs.Chat'),
                      icon: images.message
                    }
                  }
                }
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'Account'
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      text: t('tabs.Account'),
                      icon: images.account
                    }
                  }
                }
              }
            ],
            options: {
              bottomTabs: {
                titleDisplayMode: 'alwaysShow'
              }
            }
          }
        },
        right: {
          component: {
            name: 'RightMenu'
          }
        }
      }
    }
  });
};

Navigation.events().registerAppLaunchedListener(() => {
  buildTheme();
  registerScreens();
  setI18nConfig();
  RNLocalize.addEventListener('change', () => {
    setI18nConfig();
  });
  startApp();
});
