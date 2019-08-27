/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 09:56:38
 * @LastEditTime: 2019-08-27 19:11:36
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
