import {registerArticle,loginArticle} from '../../api'
 //注册
 const state = {
    registerList:{},//注册
    loginList:[]//登陆
  }
  
  
  // 模块内的同步改变
  const mutations = {
    //注册
    regis (state, payload) {
       state.registerList=payload.code
    },
    //登陆
    login (state, payload) {
      state.loginList=payload
   },
  }
  //异步
 const actions ={
   //注册
    async registerArticle({ commit }, payload) {
        let res = await registerArticle(payload);
        console.log(res,'payload')
        commit('regis', res)
      },
      //登陆
      async loginArticle({ commit }, payload) {
        let log = await loginArticle(payload);
        console.log(log,'log')
        commit('login', log)
      }
 }
 export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
 
