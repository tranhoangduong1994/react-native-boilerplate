import { t } from '../utils/LocalizationUtils';
import images from '../../assets/images';

const createCenterMenu = () => ({
  id: 'center',
  stack: {
    id: 'centerStack',
    children: [
      {
        bottomTabs: {
          children: [
            createBottomTabStack('Home', t('tabs.Home'), images.home),
            createBottomTabStack('Search', t('tabs.Search'), images.search),
            createBottomTabStack('Chat', t('tabs.Chat'), images.message),
            createBottomTabStack('Account', t('tabs.Account'), images.account)
          ],
          options: {
            bottomTabs: {
              titleDisplayMode: 'alwaysShow'
            }
          }
        }
      }
    ]
  }
});

function createBottomTabStack(
  componentName: string,
  bottomTabText: string,
  bottomTabIcon: string | number
) {
  return {
    stack: {
      children: [
        {
          component: {
            name: componentName,
            options: {
              topBar: {
                visible: false,
                height: 0
              }
            }
          }
        }
      ],
      options: {
        bottomTab: {
          text: bottomTabText,
          icon: bottomTabIcon
        }
      }
    }
  };
}

export default createCenterMenu;
