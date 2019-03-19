import { useState, useEffect } from 'react';
import { callSagaRequest } from '../../utils/RequestSagaUtils';
import { getPosts } from '../../store/actions/post';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);

    try {
      const postsResult = await callSagaRequest(getPosts);
      setLoading(false);
      setPosts(postsResult);
    } catch (err) {
      console.log('usePosts/loadPosts error', err);
      throw new Error(err);
    }
  };

  return {
    posts,
    loadPosts,
    loading
  };
};

export default usePosts;
