/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 11:24:50
 * @LastEditTime: 2019-08-27 11:35:36
 * @LastEditors: Please set LastEditors
 */
import request from '@/utils/request'
//注册
export function registerArticle (params) {
   return request.post('/teacher/register',params)
};
//登陆
export function loginArticle (params) {
    console.log(params,'params')
   return request.post('/teacher/login',params)
}
