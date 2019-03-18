import React from 'react';
import { compose } from 'redux';
import { View } from 'react-native';
import { reduxForm } from 'redux-form';
import { wrap } from '@agiletechvn/react-theme';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import PostDetails from '../../../components/PostDetails';
import * as PostActions from '../../../store/actions/post';
import RoundedButton from '../../../elements/RoundedButton';
import { t } from '../../../utils/LocalizationUtils';
import { callSagaRequest } from '../../../utils/RequestSagaUtils';

type Props = {
  componentId: String,
  id: String,
  updatePost: ({}, () => void) => void,
  deletePost: ({}, () => void) => void,
  onFinishEditing: () => void,
  handleSubmit: any => void
};

const PostEdit = (props: Props) => {
  const {
    componentId, id, updatePost, deletePost, onFinishEditing, handleSubmit
  } = props;

  async function onSubmit(values) {
    const { title, author } = values;
    try {
      await callSagaRequest(updatePost, { id, title, author });
      await Navigation.pop(componentId);
      onFinishEditing();
    } catch (err) {
      console.log('Edit post error', err);
    }
  }

  async function onDelete() {
    try {
      await callSagaRequest(deletePost, { id });
      await Navigation.pop(componentId);
      onFinishEditing();
    } catch (err) {
      console.log('Delete post error', err);
    }
  }

  return (
    <View cls="flx-i pa3">
      <PostDetails />
      <RoundedButton
        label={t('post.delete')}
        callback={handleSubmit(onDelete)}
        containerCls="bg-red"
      />
      <View cls="hg-10" />
      <RoundedButton label={t('post.save')} callback={handleSubmit(onSubmit)} />
    </View>
  );
};

export default compose(
  connect(
    null,
    { ...PostActions },
    (stateProps, dispatchProps, ownProps) => ({
      initialValues: {
        title: ownProps.title,
        author: ownProps.author
      },
      ...stateProps,
      ...dispatchProps,
      ...ownProps
    })
  ),
  reduxForm({
    form: 'PostDetails'
  }),
  wrap
)(PostEdit);
