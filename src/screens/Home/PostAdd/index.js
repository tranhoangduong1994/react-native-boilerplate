import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { reduxForm } from 'redux-form';
import { wrap } from '@agiletechvn/react-theme';
import { Navigation } from 'react-native-navigation';
import PostDetails from '../../../components/PostDetails';
import * as PostActions from '../../../store/actions/post';
import RoundedButton from '../../../elements/RoundedButton';
import { t } from '../../../utils/LocalizationUtils';

type Props = {
  componentId: String,
  addPost: ({}, () => void) => void,
  onFinishEditing: () => void,
  handleSubmit: any => void
};

const PostAdd = (props: Props) => {
  const {
    componentId, addPost, onFinishEditing, handleSubmit
  } = props;

  function onSubmit(values) {
    const { title, author } = values;
    addPost({ title, author }, onSubmitResponded);
  }

  async function onSubmitResponded(err) {
    if (err) {
      return;
    }

    await Navigation.pop(componentId);
    onFinishEditing();
  }

  return (
    <View cls="flx-i pa3">
      <PostDetails />
      <RoundedButton label={t('post.add')} callback={handleSubmit(onSubmit)} />
    </View>
  );
};

export default compose(
  connect(
    null,
    { ...PostActions }
  ),
  reduxForm({ form: 'PostDetails' }),
  wrap
)(PostAdd);
