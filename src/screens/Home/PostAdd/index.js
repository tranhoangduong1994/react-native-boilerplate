import React from 'react';
import { View } from 'react-native';
import { wrap } from '@agiletechvn/react-theme';
import { Navigation } from 'react-native-navigation';
import PostDetails from '../../../components/PostDetails';
import RoundedButton from '../../../elements/RoundedButton';
import { t } from '../../../utils/LocalizationUtils';
import { callSagaRequest } from '../../../utils/RequestSagaUtils';
import { addPost } from '../../../store/actions/post';
import ContextifiedFormik from '../../../components/common/ContextifiedFormik';

type Props = {
  componentId: String,
  onFinishEditing: () => void
};

const PostAdd = (props: Props) => {
  const { componentId, onFinishEditing } = props;

  async function onSubmit(values) {
    const { title, author } = values;
    try {
      await callSagaRequest(addPost, { title, author });
      await Navigation.pop(componentId);
      onFinishEditing();
    } catch (err) {
      console.log('Add post error', err);
    }
  }

  return (
    <ContextifiedFormik
      onSubmit={onSubmit}
      render={wrap(formProps => (
        <View cls="flx-i pa3">
          <PostDetails />
          <RoundedButton label={t('post.add')} callback={formProps.handleSubmit} />
        </View>
      ))}
    />
  );
};

export default wrap(PostAdd);
