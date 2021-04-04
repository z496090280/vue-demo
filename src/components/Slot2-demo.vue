<!--
 * @Author: your name
 * @Date: 2021-03-24 20:23:30
 * @LastEditTime: 2021-03-24 20:49:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-watermark\src\components\slot1-demo.vue
-->
<template>
  <div class="container">
    <header>
      <!-- 我们希望把页头放这里 -->
      <slot name="header"></slot>
    </header>
    <main>
      <!-- 我们希望把主要内容放这里 -->
      <slot></slot>
    </main>
    <footer>
      <!-- 我们希望把页脚放这里 -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'NamedSlot',
    components: {

    }
  }
</script>

<style>
</style>