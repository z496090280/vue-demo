/*
 * @Descripttion:
 * @version:
 * @Author: daping
 * @Date: 2021-04-13 13:54:33
 * @LastEditors: daping
 * @LastEditTime: 2021-04-13 15:21:43
 */
import shop from '../../api/shop'

const state = () => ({
  items: [],
  checkoutStatus: null
})

const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

const actions = {
  checkout ({ commit, state }, products) {
    console.log(state)
    const savedCartItems = [...state.items]
    console.log(savedCartItems)
    commit('setCheckoutStatus', null)
    commit('setCartItems', { items: [] })

    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed')
        commit('setCartItems', { items: savedCartItems })
      }
    )
  },

  addProductToCart ({ commit, state }, product) {
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id })
      } else {
        commit('incrementItemQuantity', cartItem)
      }

      // remove 1 item from stock
      commit('products/decrementProductInventory', { id: product.id }, { root: true })
    }
  }

}

const mutations = {
  pushProductToCart (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },

  incrementItemQuantity (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },

  setCartItems (state, { items }) {
    state.items = items
  },

  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
