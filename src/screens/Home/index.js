/**
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';

type Props = {};
export default class Home extends React.Component<Props> {
  render() {
    return (
      <View>
        <Text testID="welcome">Home</Text>
      </View>
    );
  }
}
