/**
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import type { MenuItemProps } from './LeftMenuItem';

import MenuItem from './LeftMenuItem';

type Props = {};
export default class LeftMenu extends React.Component<Props> {
  menuItems: MenuItemProps = [];

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
