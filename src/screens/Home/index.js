/**
 * @flow
 */

import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import { wrap } from '@agiletechvn/react-theme';
import { Navigation } from 'react-native-navigation';
import CodePushComponent from '../../components/common/CodePushComponent';
import * as PostActions from '../../store/actions/post';
import PostList from '../../elements/PostList';
import ImageButton from '../../elements/ImageButton';
import images from '../../../assets/images';

type Props = {
  getPosts: (() => void) => void,
  getPostDetails: () => void,
  componentId: String
};

const Home = (props: Props) => {
  const { getPosts, getPostDetails, componentId } = props;
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  function fetchPosts() {
    setLoading(true);
    getPosts(onGetPostsResponeded);
  }

  function onGetPostsResponeded(err, ret) {
    if (err) {
      return;
    }

    setLoading(false);
    setPosts(ret);
  }

  function onAddPress() {
    Navigation.push(componentId, {
      component: {
        name: 'PostAdd',
        passProps: {
          onFinishEditing
        }
      }
    });
  }

  function onFinishEditing() {
    fetchPosts();
  }

  function renderPostList() {
    if (loading) {
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
          posts={posts}
          refreshing={loading}
          onRefresh={fetchPosts}
          onItemSelect={onPostListItemSelect}
        />
      </View>
    );
  }

  function onPostListItemSelect(id) {
    getPostDetails({ id }, onGetPostDetailsResponded);
  }

  function onGetPostDetailsResponded(err, ret) {
    if (err) {
      return;
    }

    const { id, title, author } = ret;

    Navigation.push(componentId, {
      component: {
        name: 'PostEdit',
        passProps: {
          id,
          title,
          author,
          onFinishEditing
        }
      }
    });
  }

  function renderAddPostButton() {
    return (
      <View cls="aic pv4">
        <ImageButton image={images.add} width={100} height={100} callback={onAddPress} />
      </View>
    );
  }

  return (
    <View cls="flx-i">
      <CodePushComponent />
      {renderPostList()}
      {renderAddPostButton()}
    </View>
  );
};

export default compose(
  connect(
    null,
    { ...PostActions }
  ),
  wrap
)(Home);
