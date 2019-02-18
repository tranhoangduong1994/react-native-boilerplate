/**
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { t } from '../../utils/LocalizationUtils';

type Props = {};
export default class Search extends React.Component<Props> {
  render() {
    return (
      <View>
        <Text testID="welcome">{t('tabs.Search')}</Text>
      </View>
    );
  }
}
