/**
 * @flow
 */

import React, { useContext } from 'react';
import { View, TextInput } from 'react-native';
import { wrap } from '@agiletechvn/react-theme';
import { t } from '../utils/LocalizationUtils';
import { FormikContext } from './common/ContextifiedFormik';

const PostDetails = () => {
  const formProps = useContext(FormikContext);
  const { handleChange, values } = formProps;
  const { title, author } = values;

  return (
    <View cls="flx-i">
      <TextInput
        cls="ba pa2"
        onChangeText={handleChange('title')}
        placeholder={t('post.title')}
        value={title}
      />
      <View cls="hg-8" />
      <TextInput
        cls="ba pa2"
        onChangeText={handleChange('author')}
        placeholder={t('post.author')}
        value={author}
      />
    </View>
  );
};

export default wrap(PostDetails);
