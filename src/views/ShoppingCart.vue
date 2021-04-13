<!--
 * @Descripttion: 
 * @version: 
 * @Author: daping
 * @Date: 2021-04-13 13:33:16
 * @LastEditors: daping
 * @LastEditTime: 2021-04-13 16:59:24
-->
<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} x {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout <span :style="{color:statusColor}">{{ checkoutStatus }}</span>.</p>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  export default {
    data() {
      return {
        // statusColor: 'green'
      }
    },
    computed: {
      ...mapState({
        checkoutStatus: state => state.cart.checkoutStatus
      }),
      ...mapGetters('cart', {
        products: 'cartProducts',
        total: 'cartTotalPrice'
      }),
      statusColor() {
        return this.checkoutStatus === 'failed' ? 'red' : 'green'
      }
    },
    methods: {
      checkout(products) {
        this.$store.dispatch('cart/checkout', products)
      }
    }
  }
</script>