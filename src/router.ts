/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 19:04:32
 * @LastEditTime: 2019-08-27 19:21:16
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[{
        path: '/home/page',
        name: 'page',
        component: () => import('./views/Page.vue')
      },{
        path: '/home/about',
        name: 'about',
        component: () => import('./views/About.vue')
      }]
    },
    {
      path: '/Land',
      name: 'land',
      component: () => import('./views/Land.vue')
    },
    {
      path: '/all',
      name: 'all',
      component: () => import('./views/All.vue')
    }
  ]
})
