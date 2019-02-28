import React from 'react';
import { View } from 'react-native';
import { reduxForm } from 'redux-form';
import { wrap } from '@agiletechvn/react-theme';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import PostDetails from '../../../components/PostDetails';
import { updatePost, deletePost } from '../../../store/actions/post';
import RoundedButton from '../../../elements/RoundedButton';
import { t } from '../../../utils/LocalizationUtils';

type Props = {
  componentId: String,
  id: String,
  updatePost: ({}, () => void) => void,
  deletePost: ({}, () => void) => void,
  onFinishEditing: () => void,
  handleSubmit: any => void
};

@connect(
  null,
  {
    updatePost,
    deletePost
  },
  (stateProps, dispatchProps, ownProps) => ({
    initialValues: {
      title: ownProps.title,
      author: ownProps.author
    },
    ...stateProps,
    ...dispatchProps,
    ...ownProps
  })
)
@reduxForm({
  form: 'PostDetails'
})
@wrap
class PostEdit extends React.PureComponent<Props> {
  onSubmit = (values) => {
    const { id } = this.props;
    const { title, author } = values;
    this.props.updatePost({ id, title, author }, this.onSubmitResponded);
  };

  onDelete = () => {
    const { id } = this.props;
    this.props.deletePost({ id }, this.onSubmitResponded);
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
        <RoundedButton
          label={t('post.delete')}
          callback={this.props.handleSubmit(this.onDelete)}
          containerCls="bg-red"
        />
        <View cls="hg-10" />
        <RoundedButton label={t('post.save')} callback={this.props.handleSubmit(this.onSubmit)} />
      </View>
    );
  }
}

export default PostEdit;
