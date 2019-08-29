/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 11:24:50
 * @LastEditTime: 2019-08-29 15:37:55
 * @LastEditors: Please set LastEditors
 */
import request from '../utils/request'
//成绩列表
export function recordlists(){
   return request.get('/student/recordlists',{params:{cid:'000000000005'}})
}
//注册
export function registerArticle (params) {
   return request.post('/teacher/register',params)
};
//登陆
export function loginArticle (params) {
    console.log(params,'params')
   return request.post('/teacher/login',params)
}