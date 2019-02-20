/**
 * @flow
 */

import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

type MenuItemProps = {
  title: string,
  callback: () => void
};

const MenuItem = (props: MenuItemProps) => {
  const { title, callback } = props;
  return (
    <TouchableHighlight onPress={callback}>
      <Text>{title}</Text>
    </TouchableHighlight>
  );
};

export type { MenuItemProps };
export default MenuItem;
