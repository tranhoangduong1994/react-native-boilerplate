/**
 * @flow
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { wrap } from '@agiletechvn/react-theme';

type Props = {
  callback: () => void,
  label: String,
  containerCls?: String,
  containerDisabledCls?: String,
  textCls?: String,
  textDisabledCls?: String,
  enabled?: boolean
};

const RoundedButton = wrap((props: Props) => {
  const {
    callback,
    label,
    enabled,
    containerCls,
    containerDisabledCls,
    textCls,
    textDisabledCls
  } = props;

  function onPress() {
    if (!enabled) {
      return;
    }
    callback();
  }

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View cls={`pv3 ph5 brs-30 ${enabled ? containerCls : containerDisabledCls} `}>
        <Text cls={`f6 fw5 tc ${enabled ? textCls : textDisabledCls}`}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
});

RoundedButton.defaultProps = {
  enabled: true,
  containerCls: 'bg-green',
  containerDisabledCls: 'bg-greyLight',
  textCls: 'white',
  textDisabledCls: 'blackMoreLight'
};

export default RoundedButton;
