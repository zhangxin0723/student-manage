/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 11:35:05
 * @LastEditTime: 2019-08-28 10:34:39
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Vuex from 'vuex'
import all from './modules/all'
import visit from './modules/register'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    visit,
    all    
 },
})

export default store
