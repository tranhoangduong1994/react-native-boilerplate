/**
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import type { MenuItemProps } from './LeftMenuItem';

import { t } from '../../utils/LocalizationUtils';
import MenuItem from './LeftMenuItem';

type Props = {};
export default class LeftMenu extends React.Component<Props> {
  menuItems: MenuItemProps = [
    {
      title: t('leftMenuItems.Projects'),
      callback: () => {
        Navigation.mergeOptions('mainSideMenu', {
          sideMenu: {
            left: {
              visible: false
            }
          }
        });
        Navigation.push('Home', {
          component: {
            name: 'Projects'
          }
        });
      }
    },
    {
      title: t('leftMenuItems.Exchange'),
      callback: () => {
        Navigation.mergeOptions('mainSideMenu', {
          sideMenu: {
            left: {
              visible: false
            }
          }
        });
        Navigation.push('Home', {
          component: {
            name: 'Exchange'
          }
        });
      }
    },
    {
      title: t('leftMenuItems.ForRent'),
      callback: () => {
        Navigation.mergeOptions('mainSideMenu', {
          sideMenu: {
            left: {
              visible: false
            }
          }
        });
        Navigation.push('Home', {
          component: {
            name: 'ForRent'
          }
        });
      }
    }
  ];

  renderLeftMenuItems = () => this.menuItems.map(({ title, callback }: MenuItemProps) => (
    <MenuItem title={title} callback={callback} key={title} />
  ));

  render() {
    return (
      <View>
        <Text testID="welcome">LeftMenu</Text>
        {this.renderLeftMenuItems()}
      </View>
    );
  }
}
