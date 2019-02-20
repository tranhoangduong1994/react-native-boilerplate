/**
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { t } from '../../utils/LocalizationUtils';
import CodePushComponent from '../../components/common/CodePushComponent';

type Props = {};
export default class ForRent extends React.Component<Props> {
  render() {
    return (
      <View>
        <CodePushComponent />
        <Text testID="welcome">{t('leftMenuItems.ForRent')}</Text>
      </View>
    );
  }
}
