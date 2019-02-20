/**
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import type { MenuItemProps } from './LeftMenuItem';

import { t } from '../../utils/LocalizationUtils';
import MenuItem from './LeftMenuItem';
import NavigationUtils from '../../utils/NavigationUtils';

type Props = {};
export default class LeftMenu extends React.Component<Props> {
  menuItems: MenuItemProps = [
    {
      title: t('leftMenuItems.Projects'),
      callback: () => {
        NavigationUtils.showLeftMenuScreen({
          component: {
            name: 'Projects'
          }
        });
      }
    },
    {
      title: t('leftMenuItems.Exchange'),
      callback: () => {
        NavigationUtils.showLeftMenuScreen({
          component: {
            name: 'Exchange'
          }
        });
      }
    },
    {
      title: t('leftMenuItems.ForRent'),
      callback: () => {
        NavigationUtils.showLeftMenuScreen({
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
