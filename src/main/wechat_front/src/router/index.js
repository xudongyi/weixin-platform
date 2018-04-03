import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: "?#",//防止微信支付无法识别对应的支付目录
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
