/*
 * @Author: your name
 * @Date: 2020-04-04 20:03:55
 * @LastEditTime: 2021-04-04 23:24:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-watermark\src\main.js
 */
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
Vue.use(ElementUI);
import router from './router'
import axios from 'axios'

require('../mock');

Vue.prototype.$axios = axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
