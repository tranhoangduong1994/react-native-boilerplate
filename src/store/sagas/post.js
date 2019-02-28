import { all, takeLatest } from 'redux-saga/effects';
import { createRequestSaga } from './RequestSagaUtils';
import {
  ACTION_GET_POSTS,
  ACTION_ADD_POST,
  ACTION_UPDATE_POST,
  ACTION_DELETE_POST,
  ACTION_GET_POST_DETAILS
} from '../constants';
import PostAPIs from '../APIs/post';

const requestGetPosts = createRequestSaga({
  request: PostAPIs.getPosts,
  key: ACTION_GET_POSTS
});

const requestGetPostDetails = createRequestSaga({
  request: PostAPIs.getPostDetails,
  key: ACTION_GET_POST_DETAILS
});

const requestAddPost = createRequestSaga({
  request: PostAPIs.addPost,
  key: ACTION_ADD_POST
});

const requestUpdatePost = createRequestSaga({
  request: PostAPIs.updatePost,
  key: ACTION_UPDATE_POST
});

const requestDeletePost = createRequestSaga({
  request: PostAPIs.deletePost,
  key: ACTION_DELETE_POST
});

export default [
  function* postWatcher() {
    yield all([
      takeLatest(ACTION_GET_POSTS, requestGetPosts),
      takeLatest(ACTION_GET_POST_DETAILS, requestGetPostDetails),
      takeLatest(ACTION_ADD_POST, requestAddPost),
      takeLatest(ACTION_UPDATE_POST, requestUpdatePost),
      takeLatest(ACTION_DELETE_POST, requestDeletePost)
    ]);
  }
];
