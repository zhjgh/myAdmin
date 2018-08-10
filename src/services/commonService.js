import request from '../utils/request'
import errorMessage from '../utils/errorMessage'
import { message } from 'antd'

export async function getDataService (config, params) {
  const res = await request({
    url: config.url,
    method: 'get',
    data: { ...params, random: new Date().getTime() }
  });
  return res;
  //根据后端返回的code进行逻辑处理
}

export async function postDataService (config, params) {
  const res = await request({
    url: config.url,
    method: 'post',
    data: params,
  });
  return res;
}
