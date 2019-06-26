import { $http } from '@/request/index';

export function getInfo() {
  return $http({
    url: '/user/info',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
}
