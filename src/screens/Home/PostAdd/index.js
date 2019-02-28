import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { reduxForm } from 'redux-form';
import { wrap } from '@agiletechvn/react-theme';
import { Navigation } from 'react-native-navigation';
import PostDetails from '../../../components/PostDetails';
import { addPost } from '../../../store/actions/post';
import RoundedButton from '../../../elements/RoundedButton';
import { t } from '../../../utils/LocalizationUtils';

type Props = {
  componentId: String,
  addPost: ({}, () => void) => void,
  onFinishEditing: () => void,
  handleSubmit: any => void
};
@connect(
  null,
  {
    addPost
  }
)
@reduxForm({
  form: 'PostDetails'
})
@wrap
class PostAdd extends React.PureComponent<Props> {
  onSubmit = (values) => {
    const { title, author } = values;
    this.props.addPost({ title, author }, this.onSubmitResponded);
  };

  onSubmitResponded = async (err) => {
    if (err) {
      return;
    }

    await Navigation.pop(this.props.componentId);
    this.props.onFinishEditing();
  };

  render() {
    return (
      <View cls="flx-i pa3">
        <PostDetails />
        <RoundedButton label={t('post.add')} callback={this.props.handleSubmit(this.onSubmit)} />
      </View>
    );
  }
}

export default PostAdd;
