<!--
 * @Author: lee
 * @Date: 2022-06-12 21:53:17
 * @LastEditTime: 2022-06-12 22:30:47
-->
<template>
  <div>
    <div class="box" v-if="show">
      <img :src="imgUrl" alt="加载失败" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Img',
  data() {
    return {
      imgUrl: '',
      show: false
    }
  },
}
</script>

<style scoped>
.box {
  padding: 10px;
  background: pink;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>