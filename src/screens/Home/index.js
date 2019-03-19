/**
 * @flow
 */

import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { wrap } from '@agiletechvn/react-theme';
import { Navigation } from 'react-native-navigation';
import CodePushComponent from '../../components/common/CodePushComponent';
import PostList from '../../elements/PostList';
import ImageButton from '../../elements/ImageButton';
import images from '../../../assets/images';
import usePosts from './usePosts';

type Props = {
  componentId: String
};

const Home = (props: Props) => {
  const { componentId } = props;

  const { posts, loadPosts, loading } = usePosts();

  function onAddPress() {
    Navigation.push(componentId, {
      component: {
        name: 'PostAdd',
        passProps: {
          onFinishEditing: loadPosts
        }
      }
    });
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
          onRefresh={loadPosts}
          onItemSelect={onPostListItemSelect}
        />
      </View>
    );
  }

  async function onPostListItemSelect(id) {
    try {
      Navigation.push(componentId, {
        component: {
          name: 'PostEdit',
          passProps: {
            id,
            onFinishEditing: loadPosts
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

export default wrap(Home);
