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
    }
  ]
})
