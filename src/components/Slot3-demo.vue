<!--
 * @Author: your name
 * @Date: 2021-03-24 20:23:30
 * @LastEditTime: 2021-04-05 01:52:24
 * @LastEditors: daping
 * @Description: In User Settings Edit
 * @FilePath: \vue-watermark\src\components\slot1-demo.vue
-->
<template>
  <span>
    <slot v-bind:todo="todo,user" name="footer">
      {{todo.i}}
    </slot>
  </span>
</template>

<script>
  export default {
    name: 'ScopeSlotDemo',
    components: {

    },
    data() {
      return {
        user: {
          firstName: 'chen',
          lastName: 'wang'
        },
        todo: {
          i: '作用域插槽示例',
          e: true
        }
      }
    }
  }
</script>

<style>
</style>