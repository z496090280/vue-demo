<!--
 * @Author: your name
 * @Date: 2021-03-24 20:23:30
 * @LastEditTime: 2021-04-06 19:18:08
 * @LastEditors: daping
 * @Description: In User Settings Edit
 * @FilePath: \vue-watermark\src\components\slot1-demo.vue
-->
<template>
  <div>
    <slot>{{ milk }}</slot>
    <button @click="handleCount"> model示例</button>
  </div>
</template>

<script>
  export default {
    name: 'ModelDemo',
    props: ['milk'],
    model: {
      props: 'milk',
      event: 'change'
    },
    data() {
      return {
        countA: 0
      }
    },
    methods: {
      handleCount() {
        this.$emit('change', ++this.countA)
      }
    }
  }
</script>

<style>
</style>