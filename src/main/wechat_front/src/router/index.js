import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['../page/home.vue'], resolve)
    },
    {
      path: '/home2',
      name: 'home2',
      component: resolve => require(['../page/home2.vue'], resolve)
    },
    {
      path: '/home3',
      name: 'home3',
      component: resolve => require(['../page/home3.vue'], resolve)
    },
  ]
})
