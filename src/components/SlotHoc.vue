<!--
 * @Author: your name
 * @Date: 2021-03-24 20:23:30
 * @LastEditTime: 2021-04-04 14:50:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-watermark\src\components\slot1-demo.vue
-->
<template>
  <ul>
    <li v-for="item in list">
      <slot :item="item"></slot>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'SlotHoc',
    data() {
      return {
        list: [
          { name: '橘子', num: 12 },
          { name: '苹果', num: 0 },
          { name: '香蕉', num: 3 },
        ]
      }
    }
  }
</script>

<style>

</style>