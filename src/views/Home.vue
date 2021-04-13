<!--
 * @Author: your name
 * @Date: 2021-04-04 21:06:47
 * @LastEditTime: 2021-04-13 13:36:14
 * @LastEditors: daping
 * @Description: In User Settings Edit
 * @FilePath: \vue-watermark\src\views\Home.vue
-->
<template>
  <div class="home">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list />
    <hr>
    <ShoppingCart />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import ProductList from '@/views/ProductList.vue'
  import ShoppingCart from '@/views/ShoppingCart.vue'

  export default {
    name: 'Home',
    components: {
      HelloWorld,
      ProductList,
      ShoppingCart
    }
  }
</script>