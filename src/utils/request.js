
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 14:08:02
 * @LastEditTime: 2019-08-29 11:01:28
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: '',
  //'http://169.254.12.198:7001/',
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error,'err') // for debug
    return Promise.reject(error)
  }
)


export default service
