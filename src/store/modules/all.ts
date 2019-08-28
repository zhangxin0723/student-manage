/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 19:32:14
 * @LastEditTime: 2019-08-28 09:07:39
 * @LastEditors: Please set LastEditors
 */
// 模块所有的状态
import { recordlists, } from '@/api'
const state = {
  editFlag: false,
  delFlag: false,
}

// 模块内的同步改变
const mutations = {
  //编辑弹框
  edit_change(state:any,payload:any){
    state.editFlag = !state.editFlag
  },
  //删除弹框
  del_change(state:any,payload:any){
    state.delFlag = !state.delFlag
  }
}

// 模块内的异步改变
const actions = {
  async recordlists({commit}:any,payload:any){
    let res= await recordlists()
    console.log(res)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}