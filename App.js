import { Navigation } from 'react-native-navigation';
import registerScreens from './src/screens';

const startApp = () => {
  Navigation.setDefaultOptions({
    statusBar: {
      style: 'light'
    },
    layout: {
      orientation: ['portrait']
    },
    topBar: {
      visible: false
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
                      text: 'Home'
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
                      text: 'Search'
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
                      text: 'Chat'
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
                      text: 'Account'
                    }
                  }
                }
              }
            ]
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
