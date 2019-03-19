import { useEffect, useState } from 'react';

import {
  getPostDetails as getPostDetailsAction,
  updatePost as updatePostAction,
  deletePost as deletePostAction
} from '../../../store/actions/post';
import { callSagaRequest } from '../../../utils/RequestSagaUtils';

const usePost = (id) => {
  const [post, setPost] = useState({ author: '', title: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPost();
  }, [id]);

  async function loadPost() {
    setLoading(true);

    try {
      const postResult = await callSagaRequest(getPostDetailsAction, { id });
      setLoading(false);
      const { title, author } = postResult;
      setPost({ title, author });
    } catch (err) {
      console.log('usePost/loadPost error', err);
      throw new Error(err);
    }
  }

  async function updatePost(title: String, author: String) {
    setLoading(true);

    try {
      await callSagaRequest(updatePostAction, { id, title, author });
      setLoading(false);
      setPost({ title, author });
    } catch (err) {
      console.log('usePost/updatePost error', err);
      throw new Error(err);
    }
  }

  async function deletePost() {
    setLoading(true);
    try {
      await callSagaRequest(deletePostAction, { id });
      setLoading(false);
      setPost({ author: '', title: '' });
    } catch (err) {
      console.log('usePost/deletePost error', err);
      throw new Error(err);
    }
  }

  return {
    post,
    loadPost,
    updatePost,
    deletePost,
    loading
  };
};

export default usePost;
