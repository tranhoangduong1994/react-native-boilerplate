/**
 * @flow
 */

import React from 'react';
import { View, TextInput } from 'react-native';
import { Field } from 'redux-form';
import { wrap } from '@agiletechvn/react-theme';
import { t } from '../utils/LocalizationUtils';

const ReduxifiedTextInput = wrap(({ input, ...rest }) => {
  const {
    onChange, value, onBlur, onFocus
  } = input;
  return (
    <TextInput
      {...rest}
      cls="bw-1 f5 pa2"
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
});

@wrap
class PostDetails extends React.PureComponent {
  render() {
    return (
      <View cls="flx-i">
        <Field name="title" component={ReduxifiedTextInput} placeholder={t('post.title')} />
        <View cls="hg-8" />
        <Field name="author" component={ReduxifiedTextInput} placeholder={t('post.author')} />
      </View>
    );
  }
}

export default PostDetails;
