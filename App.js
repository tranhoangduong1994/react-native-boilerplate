import { Navigation } from 'react-native-navigation';
import registerScreens from './src/screens';
import images from './assets/images';

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
                      text: 'Home',
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
                      text: 'Search',
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
                      text: 'Chat',
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
                      text: 'Account',
                      icon: images.account
                    }
                  }
                }
              }
            ],
            options: {
              bottomTabs: {
                // titleDisplayMode: 'alwaysHide'
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
  registerScreens();
  startApp();
});
