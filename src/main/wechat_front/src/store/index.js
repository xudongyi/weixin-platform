/**
 * 作者：yujinjin9@126.com
 * 时间：2017-01-19
 * app数据管理入口文件
 */

import Vue from 'vue'
import Vuex from 'vuex'
import storeData from './store-data'


Vue.use(Vuex);

export default new Vuex.Store({
    strict:false,
    modules: {
      storeData
    }
})
