/*
 * @Author: your name
 * @Date: 2020-04-04 20:03:55
 * @LastEditTime: 2021-04-13 14:35:29
 * @LastEditors: daping
 * @Description: In User Settings Edit
 * @FilePath: \vue-watermark\src\main.js
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
Vue.use(ElementUI)
import router from './router'
import axios from 'axios'
import store from '../store'
import { currency } from './currency'

Vue.filter('currency', currency)

require('../mock')

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
