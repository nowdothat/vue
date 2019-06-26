export default function(response) {
  const url = response.config.url;
  const method = response.config.method;
  const params = response.config.params || response.config.data;
  if (response.status === 200 && response.data.retCode === 'success') {
    console.info('请求成功：', `${method}：${url}`);
    console.info('请求参数：', params);
    console.info('返回数据：', response.data);
  } else {
    console.warn('请求失败：', `${method}：${url}`);
    console.warn('请求参数：', params);
    console.warn('返回数据：', response.data);
  }
}
