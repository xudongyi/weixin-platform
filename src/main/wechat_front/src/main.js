// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from "./store/"
import App from './App'
import router from './router'
import {
  http,
  imgPath
} from "./plugins/http"
Vue.config.productionTip = false;
window.http = http;
window.imgPath = imgPath;
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.afterEach((router) =>{
  document.title =  router.meta.title || "";
  //解决ios下title无法显示的问题
  if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
    let iframe = document.createElement('iframe')
    iframe.src = '/MP_verify_zxjwxCcP80t475ww.txt'
    iframe.style.display = 'none'
    iframe.onload = function () {
      setTimeout(function () {
        iframe.remove()
      }, 0)
      document.body.appendChild(iframe)
    }
  }
});
