import axios from 'axios'
import qs from 'qs'
import { baseURL } from './config'
import lodash from 'lodash'
import { message } from 'antd'

// axios.defaults.baseURL = baseURL

const fetch = (options) => {
  console.log(options)
  let {
    method = 'get',
    data = {},
    url,
  } = options

  // 所有的除了登录的接口都需要token
  /* if(localStorage.getItem('token')){
    data.token = localStorage.getItem('token')
  }*/

  // axios.defaults.headers.common.token = localStorage.getItem('token')

  const cloneData = lodash.cloneDeep(data)

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: cloneData,
      })
    case 'delete':
      return axios.delete(url, {
        data: cloneData,
      })
    case 'post':
      return axios.post(url, cloneData)
    case 'put':
      return axios.put(url, cloneData)
    case 'patch':
      return axios.patch(url, cloneData)
    default:
      return axios(options)
  }
}

export default function request (options) {
  return fetch(options).then((response) => {
    // console.log(response)
    const { statusText, status } = response
    let data = response.data
    return {
      success: true,
      message: statusText,
      status,
      ...data,
    }
  }).catch((error) => {
    const { response } = error
    let msg
    let status
    let otherData = {}
    if (response) {
      const { data, statusText } = response
      otherData = data
      status = response.status
      msg = data.message || statusText
    } else {
      status = 600
      msg = '网络错误'
    }
    return { success: false, status, message: msg, ...otherData }
  })
}
