import request from '../utils/request'
import errorMessage from '../utils/errorMessage'
import { message } from 'antd'

export async function getDataService (config, params) {
  const res = await request({
    url: config.url,
    method: 'get',
    data: { ...params, random: new Date().getTime() }
  })
  const code = res.code
  //根据后端返回的code进行逻辑处理
  if (code !== '1') {
    if (code !== '9999') {
      res.success = false
      if (errorMessage[code]) {
        message.warning(errorMessage[code], 5)
      } else if (errorMessage[code] === null){

      } else {
        // message.warning('系统错误', 5)
      }
    }
  }
  if (code === '40000') {
		// 处理token过期，清除storage中的user对象，token
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    window.location = '/login'
  } else if (code === '-1') {
    return res
  } else {
    return res
  }
}

export async function postDataService (config, params) {
  const res = await request({
    url: config.url,
    method: 'post',
    data: params,
  })
  const code = res.code
  //根据后端返回的code进行逻辑处理
  if (code !== '1') {
    if (code !== '9999') {
      res.success = false
      if (errorMessage[code]) {
        message.warning(errorMessage[code], 5)
      } else if (errorMessage[code] === null){

      } else {
        // message.warning('系统错误', 5)
      }
    }
  }
  if (code === '40000') {
		// 处理token过期，清除storage中的user对象，token
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    window.location = '/login'
  } else if (code === '-1') {
    return res
  } else {
    return res
  }
}
