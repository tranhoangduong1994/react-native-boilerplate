/**
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { t } from '../../utils/LocalizationUtils';

type Props = {};
export default class Chat extends React.Component<Props> {
  render() {
    return (
      <View>
        <Text testID="welcome">{t('tabs.Chat')}</Text>
      </View>
    );
  }
}
