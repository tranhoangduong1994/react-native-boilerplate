import { create } from 'apisauce';
import qs from 'qs';

const baseURL = 'http://localhost:3000';
const timeout = 3000;

export const API = create({
  baseURL,
  timeout
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
