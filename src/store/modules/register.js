import {registerArticle} from '../../api'
 //注册
 const state = {
    registerList:{}
  }
  
  
  // 模块内的同步改变
  const mutations = {
    regis (state, payload) {
       state.registerList=payload.code
    }
  }
  //异步
 const actions ={
    async registerArticle({ commit }, payload) {
        let res = await registerArticle(payload);
        console.log(res,'payload')
        commit('regis', res)
      }
 }
 export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
 
