/*
 * @Descripttion:
 * @version:
 * @Author: daping
 * @Date: 2021-04-13 13:53:50
 * @LastEditors: daping
 * @LastEditTime: 2021-04-13 14:03:17
 */
import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import createLogger from '../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
