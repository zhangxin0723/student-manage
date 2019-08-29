/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 11:24:50
 * @LastEditTime: 2019-08-28 21:20:33
 * @LastEditors: Please set LastEditors
 */
import request from '@/utils/request'
//成绩列表
export function recordlists(){
   return request.get('student/recordlists',{params:{cid:'000000000005'}})
}