/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 11:24:50
 * @LastEditTime: 2019-08-28 09:13:14
 * @LastEditors: Please set LastEditors
 */
import request from '@/utils/request'
//成绩列表
export function recordlists():void{
   return request.get('/student/recordlists')
}