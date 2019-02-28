/**
 * @flow
 */

import React from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import { wrap } from '@agiletechvn/react-theme';
import { Navigation } from 'react-native-navigation';
import CodePushComponent from '../../components/common/CodePushComponent';
import { getPosts, getPostDetails } from '../../store/actions/post';
import PostList from '../../elements/PostList';
import ImageButton from '../../elements/ImageButton';
import images from '../../../assets/images';

type Props = {
  getPosts: (() => void) => void,
  getPostDetails: () => void,
  componentId: String
};

@connect(
  null,
  {
    getPosts,
    getPostDetails
  }
)
@wrap
class Home extends React.Component<Props> {
  state = {
    loading: false,
    posts: []
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    this.setState({
      loading: true
    });
    this.props.getPosts(this.onGetPostsResponeded);
  };

  onGetPostsResponeded = (err, ret) => {
    if (err) {
      return;
    }

    this.setState({
      loading: false,
      posts: ret
    });
  };

  onAddPress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'PostAdd',
        passProps: {
          onFinishEditing: this.onFinishEditing
        }
      }
    });
  };

  onPostListItemSelect = (id) => {
    this.props.getPostDetails({ id }, this.onGetPostDetailsResponded);
  };

  onGetPostDetailsResponded = (err, ret) => {
    if (err) {
      return;
    }

    const { id, title, author } = ret;

    Navigation.push(this.props.componentId, {
      component: {
        name: 'PostEdit',
        passProps: {
          id,
          title,
          author,
          onFinishEditing: this.onFinishEditing
        }
      }
    });
  };

  onFinishEditing = () => {
    this.fetchPosts();
  };

  renderPostList() {
    if (this.state.loading) {
      return (
        <View cls="flx-i">
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View cls="flx-i">
        <PostList
          cls="flx-i bw-2"
          posts={this.state.posts}
          refreshing={this.state.loading}
          onRefresh={this.fetchPosts}
          onItemSelect={this.onPostListItemSelect}
        />
      </View>
    );
  }

  renderAddPostButton() {
    return (
      <View cls="aic pv4">
        <ImageButton image={images.add} width={100} height={100} callback={this.onAddPress} />
      </View>
    );
  }

  render() {
    return (
      <View cls="flx-i">
        <CodePushComponent />
        {this.renderPostList()}
        {this.renderAddPostButton()}
      </View>
    );
  }
}

export default Home;
