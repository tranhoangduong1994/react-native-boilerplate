/**
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import type { MenuItemProps } from './LeftMenuItem';

import MenuItem from './LeftMenuItem';

const LeftMenu = () => {
  const menuItems: MenuItemProps = [];

  function renderLeftMenuItems() {
    menuItems.map(({ title, callback }: MenuItemProps) => (
      <MenuItem title={title} callback={callback} key={title} />
    ));
  }

  return (
    <View>
      <Text testID="welcome">LeftMenu</Text>
      {renderLeftMenuItems()}
    </View>
  );
};

export default LeftMenu;
