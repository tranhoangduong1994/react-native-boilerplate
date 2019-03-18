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
import { callSagaRequest } from '../../utils/RequestSagaUtils';

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

  async function fetchPosts() {
    setLoading(true);
    try {
      const postsResult = await callSagaRequest(getPosts);
      setLoading(false);
      setPosts(postsResult);
    } catch (err) {
      console.log('Fetch posts error', err);
    }
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

  async function onPostListItemSelect(id) {
    try {
      const postDetailsResult = await callSagaRequest(getPostDetails, { id });
      const { title, author } = postDetailsResult;

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
    } catch (err) {
      console.log('Fetch post details error', err);
    }
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
