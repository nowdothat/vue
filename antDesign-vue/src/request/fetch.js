import axios from 'axios';
import config from '@/config/index.js';
import log from './log.js';

const baseURL = config.mock
  ? process.env.VUE_APP_MOCK_SERVER
  : process.env.VUE_APP_SERVER;

const fetch = axios.create({
  baseURL: baseURL,
  responseType: 'json',
  withCredentials: true,
  timeout: 6000
});

fetch.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

fetch.interceptors.response.use(
  response => {
    config.resLog && log(response);
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
export default fetch;
