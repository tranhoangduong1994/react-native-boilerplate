/**
 * @flow
 */

import React from 'react';
import {
  View, TouchableOpacity, Text, FlatList
} from 'react-native';
import { wrap } from '@agiletechvn/react-theme';

export type Post = {
  id: String,
  title: String,
  author: String
};

type ListItem = {
  item: Post
};

type Props = {
  posts: [Post],
  refreshing: boolean,
  onRefresh: () => void,
  onItemSelect: String => void
};

const PostList = wrap((props: Props) => {
  const {
    posts, refreshing, onRefresh, onItemSelect
  } = props;

  const renderListItem = wrap(({ item: { id, title, author } }: ListItem) => (
    <TouchableOpacity onPress={() => onItemSelect(id)}>
      <View cls="pa3">
        <Text cls="f4 fw5">{id}</Text>
        <Text cls="f5 fw5">{title}</Text>
        <Text cls="f6">{author}</Text>
      </View>
    </TouchableOpacity>
  ));

  return (
    <FlatList
      data={posts}
      renderItem={renderListItem}
      keyExtractor={item => String(item.id)}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
});

export default PostList;
