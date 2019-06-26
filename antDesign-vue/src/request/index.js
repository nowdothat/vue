import jsonp from 'jsonp';
import fetch from './fetch.js';
import apis from '@/api';
import config from '@/config';
import { type } from '@/utils/util.js';
const baseURL = config.mock
  ? process.env.VUE_APP_MOCK_SERVER
  : process.env.VUE_APP_SERVER;
const $httpJsonp = function(url, reqParams) {
  return new Promise((resolve, reject) => {
    jsonp(
      url,
      {
        param: reqParams
      },
      (err, data) => {
        err ? reject(err) : resolve(data);
      }
    );
  })
};
const $http = function(name, params = {}, config = {}) {
  const api = apis[name];
  const typeParams = type(params);
  if (typeParams !== 'object' && typeParams !== 'formdata')
    throw TypeError('请求参数类型错误');
  if (!api) throw TypeError('请求接口名称出错');
  const options = {
    baseURL: api.baseURL || baseURL,
    headers: api.headers,
    timeout: api.timeout,
    method: api.method,
    url: api.url,
    responseType: api.responseType,
    ...config
  };
  const reg = /\/(:id)/;
  const regTest = options.url.split(reg);
  if (regTest[1]) {
    regTest[1] = `/${params.id}`;
    options.url = regTest.join('');
    delete params.id;
  }
  const reqParams =
    typeParams === 'formdata' ? params : { ...api.params, ...params };
  // 如果为jsonp
  if (api.jsonp) {
    return $httpJsonp(`${options.baseURL}${options.url}`, reqParams);
  }
  // 判断方法 输出参数
  switch (api.method) {
    case 'GET':
      options.params = reqParams;
      break;
    default:
      options.data = reqParams;
  }
  return fetch(options);
};
const vueHttp = {
  install(Vue) {
    if (this.installed) {
      return;
    }
    this.installed = true;
    Object.defineProperty(Vue.prototype, '$http', {
      value: $http,
      writable: false
    });
  }
};
export { vueHttp, $http, fetch };
