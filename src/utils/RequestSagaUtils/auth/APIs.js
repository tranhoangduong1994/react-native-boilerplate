import { create } from 'apisauce';
import { AUTH_SERVER } from 'react-native-dotenv';

const API = create({
  baseURL: AUTH_SERVER
});

export default {
  refreshAccessToken: ({ refresh_token }) => API.post('auth/refresh', { refresh_token })
};
