import axios from '../utils/axios'
import errorMessage from '../utils/errorMessage'
import { message } from 'antd'

export async function getDataService (config, params) {
  const res = await axios({
    url: config.url,
    method: 'get',
    data: { ...params, random: new Date().getTime() }
  })
  const code = res.code
  //根据后端返回的code进行逻辑处理
}

export async function postDataService (config, params) {
  const res = await axios({
    url: config.url,
    method: 'post',
    data: params,
  })
  const code = res.code
  //根据后端返回的code进行逻辑处理
}
