/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 11:35:05
 * @LastEditTime: 2019-08-27 11:35:13
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Vuex from 'vuex'
import visit from './modules/register'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    visit
  },
})

export default store