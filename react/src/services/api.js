import request from '../utils/request';
//用户登陆ok
export async function goLogin(params) {
  return request({
    url: 'http://192.168.130.250:3001/',
    method: 'get',
    data : params
  });
}
