// import { t } from '../utils/LocalizationUtils';
// import images from '../../assets/images';

const createCenterMenu = () => ({
  stack: {
    children: [
      {
        component: {
          name: 'Home',
          id: 'Home',
          options: {
            topBar: {
              visible: false,
              height: 0
            }
          }
        }
        // bottomTabs: {
        //   children: [
        //     createBottomTabStack('Home', t('tabs.Home'), images.home),
        //     createBottomTabStack('Search', t('tabs.Search'), images.search)
        //   ],
        //   options: {
        //     bottomTabs: {
        //       titleDisplayMode: 'alwaysShow'
        //     }
        //   }
        // }
      }
    ]
  }
});

// function createBottomTabStack(
//   componentName: string,
//   bottomTabText: string,
//   bottomTabIcon: string | number
// ) {
//   return {
//     stack: {
//       children: [
//         {
//           component: {
//             name: componentName,
//             options: {
//               topBar: {
//                 visible: false,
//                 height: 0
//               }
//             }
//           }
//         }
//       ],
//       options: {
//         bottomTab: {
//           text: bottomTabText,
//           icon: bottomTabIcon
//         }
//       }
//     }
//   };
// }

export default createCenterMenu;
