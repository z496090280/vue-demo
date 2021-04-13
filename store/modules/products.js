/*
 * @Descripttion:
 * @version:
 * @Author: daping
 * @Date: 2021-04-13 13:54:33
 * @LastEditors: daping
 * @LastEditTime: 2021-04-13 15:06:27
 */
import shop from '../../api/shop'

const state = () => ({
  all: []
})

const getters = {
}

const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(res => {
      commit('setProducts', res)
    })
  }
}

const mutations = {
  setProducts (state, res) {
    // console.log(res)
    state.all = res
  },

  decrementProductInventory (state, { id }) {
    const product = state.all.find(item => item.id === id)
    product.inventory--
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
