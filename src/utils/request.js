/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 14:08:02
 * @LastEditTime: 2019-08-28 17:28:40
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios'
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
    // 判断是否有登陆态
    // if (getToken()) {
    //   // 让每个请求携带authorization
    //   config.headers['authorization'] = getToken()
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor

service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
    // return Promise.reject(error)
  }
)

export default service