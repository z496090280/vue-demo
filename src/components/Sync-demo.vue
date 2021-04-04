<!--
 * @Author: your name
 * @Date: 2021-03-24 20:23:30
 * @LastEditTime: 2021-04-04 14:37:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-watermark\src\components\slot1-demo.vue
-->
<template>
  <div>
    {{count}}
    <button @click="handleCount"> Sync示例</button>
  </div>
</template>

<script>
  export default {
    name: 'SyncDemo',
    props: ['count'],
    data() {
      return {

      }
    },
    methods: {
      handleCount() {
        this.$emit('update:childCount', this.count + 1)
      }
    }
  }
</script>

<style>
</style>