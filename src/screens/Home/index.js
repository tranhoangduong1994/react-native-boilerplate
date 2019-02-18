/**
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { t } from '../../utils/LocalizationUtils';

type Props = {};
export default class Home extends React.Component<Props> {
  render() {
    return (
      <View>
        <Text testID="welcome">{t('tabs.Home')}</Text>
      </View>
    );
  }
}
