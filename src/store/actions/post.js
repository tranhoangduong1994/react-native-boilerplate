import {
  ACTION_GET_POSTS,
  ACTION_ADD_POST,
  ACTION_UPDATE_POST,
  ACTION_DELETE_POST,
  ACTION_GET_POST_DETAILS
} from '../constants';

export const getPosts = callback => ({
  type: ACTION_GET_POSTS,
  args: [callback]
});

export const getPostDetails = ({ id }, callback) => ({
  type: ACTION_GET_POST_DETAILS,
  args: [
    {
      id
    },
    callback
  ]
});

export const addPost = ({ title, author }, callback) => ({
  type: ACTION_ADD_POST,
  args: [
    {
      title,
      author
    },
    callback
  ]
});

export const updatePost = ({ title, author, id }, callback) => ({
  type: ACTION_UPDATE_POST,
  args: [
    {
      title,
      author,
      id
    },
    callback
  ]
});

export const deletePost = ({ id }, callback) => ({
  type: ACTION_DELETE_POST,
  args: [
    {
      id
    },
    callback
  ]
});
