import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: "?#",//防止微信支付无法识别对应的支付目录
  routes: [
    {
      path: '/',
      name: '/',
      meta: {
        title: "首页",
      },
      component: resolve => require(['../page/home.vue'], resolve)
    },
    {
      path: '/home2',
      name: 'home2',
      meta: {
        title: "测试2",
      },
      component: resolve => require(['../page/home2.vue'], resolve)
    },
    {
      path: '/home3',
      name: 'home3',
      meta: {
        title: "测试3",
      },
      component: resolve => require(['../page/home3.vue'], resolve)
    },
  ]

})
