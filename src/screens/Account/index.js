/**
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { t } from '../../utils/LocalizationUtils';

type Props = {};
export default class Account extends React.Component<Props> {
  render() {
    return (
      <View>
        <Text testID="welcome">{t('tabs.Account')}</Text>
      </View>
    );
  }
}
