import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { wrap } from '@agiletechvn/react-theme';

import { Navigation } from 'react-native-navigation';
import PostDetails from '../../../components/PostDetails';

import RoundedButton from '../../../elements/RoundedButton';
import { t } from '../../../utils/LocalizationUtils';
import usePost from './usePost';
import ContextifiedFormik from '../../../components/common/ContextifiedFormik';

type Props = {
  componentId: String,
  id: String,
  onFinishEditing: () => void
};

const PostEdit = (props: Props) => {
  const { componentId, id, onFinishEditing } = props;

  const {
    post, updatePost, deletePost, loading
  } = usePost(id);

  async function onSubmit(values) {
    const { title, author } = values;
    try {
      await updatePost(title, author);
      await Navigation.pop(componentId);
      onFinishEditing();
    } catch (err) {
      console.log('Edit post error', err);
    }
  }

  async function onDelete() {
    try {
      await deletePost();
      await Navigation.pop(componentId);
      onFinishEditing();
    } catch (err) {
      console.log('Delete post error', err);
    }
  }

  function renderPostDetails() {
    if (loading) {
      return (
        <View cls="flx-i">
          <ActivityIndicator />
        </View>
      );
    }

    const { title, author } = post;

    return (
      <ContextifiedFormik
        initialValues={{ author, title }}
        onSubmit={onSubmit}
        render={wrap(formProps => (
          <View cls="flx-i pa3">
            <PostDetails />
            <RoundedButton label={t('post.delete')} callback={onDelete} containerCls="bg-red" />
            <View cls="hg-10" />
            <RoundedButton label={t('post.save')} callback={formProps.handleSubmit} />
          </View>
        ))}
      />
    );
  }

  return <View cls="flx-i">{renderPostDetails()}</View>;
};

export default wrap(PostEdit);
