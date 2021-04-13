<!--
 * @Descripttion: 
 * @version: 
 * @Author: daping
 * @Date: 2021-04-13 13:27:47
 * @LastEditors: daping
 * @LastEditTime: 2021-04-13 14:42:16
-->
<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }} - {{ product.price | currency }}
      <br>
      <button :disabled="!product.inventory" @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    computed: mapState({
      products: state => state.products.all
    }),
    methods: mapActions('cart', [
      'addProductToCart'
    ]),
    created() {
      this.$store.dispatch('products/getAllProducts')
    }
  }
</script>