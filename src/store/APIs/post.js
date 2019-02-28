import { API } from '.';

export default {
  getPosts: () => API.get('posts'),
  getPostDetails: ({ id }) => API.get(`posts/${id}`),
  addPost: ({ title, author }) => API.post('posts', {
    title,
    author
  }),
  updatePost: ({ title, author, id }) => API.put(`posts/${id}`, {
    title,
    author
  }),
  deletePost: ({ id }) => API.delete(`posts/${id}`)
};
