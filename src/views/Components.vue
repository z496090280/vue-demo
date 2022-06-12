<!--
 * @Author: lee
 * @Date: 2022-06-12 22:11:16
 * @LastEditTime: 2022-06-12 22:42:29
-->
<template>
  <div class="about">
    <h1>This is an components page</h1>
    <ul>
      <li class="btn" v-for="item in ulData" :key="item.query" @click="onClick(item.query)">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Components',
  data() {
    return {
      ulData: [
        { title: '图片1', query: 1 },
        { title: '图片2', query: 2 },
        { title: '图片3', query: 3 },
        { title: '图片4', query: 4 },
        { title: '关闭', query: 0 },
      ],
    }
  },
  methods: {
    onClick(query) {
      if (query === 0) {
        console.log(query)
        this.$imgBox.close()
        return
      }
      this.$imgBox({
        imgUrl: `https://picsum.photos/200/200?random=${query}`,
      })
    }
  }
}
</script>

<style scoped>
li.btn {
  display: inline-block;
  padding: 15px;
  border: 1px solid #ccc;
  background: black;
  color: #fff;
  cursor: pointer;
}
</style>