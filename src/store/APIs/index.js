import { AUTH_SERVER } from 'react-native-dotenv';
import { create } from 'apisauce';
import qs from 'qs';

export const API = create({
  baseURL: AUTH_SERVER
});

API.addRequestTransform((request) => {
  if (request.method === 'get') {
    if (request.params instanceof Object) {
      if (request.url.indexOf('?') > 0) {
        request.url += `&${qs.stringify(request.params)}`;
      } else {
        request.url += `?${qs.stringify(request.params)}`;
      }

      request.params = null;
    }
  }

  return request;
});

export const withToken = (token, request, ...args) => {
  if (args.length === 1) {
    args.push(null);
    args.push({
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return request(...args);
  }

  if (args.length === 2) {
    args.push({
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  throw new Error('withToken - Arguments number must be 1 or 2');
};
