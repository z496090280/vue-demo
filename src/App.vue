<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/table">Table</router-link> |
      <router-link to="/form">Form</router-link>
    </div>
    <router-view />

    <Slot1>save</Slot1>

    <Slot2>
      <template #header>
        <h1>我是头</h1>
      </template>
      <template>
        <h1>我是body</h1>
      </template>
      <template #footer>
        <h1>我是头</h1>
      </template>
    </Slot2>

    <Slot3>
      <template v-slot:footer="{todo:scope}">
        {{scope.i}}
      </template>
    </Slot3>
    <Model1 v-model="count">{{count}}</Model1>
    <Sync1 :count="parentCount" :childCount.sync="parentCount"></Sync1>
    <!-- 解构插槽 -->
    <!-- <Slot3>
      <template #default="{user}">
        {{test.firstName}}----我是解构
      </template>
    </Slot3> -->
    <SlotHoc>
      <template #default="{item}">
        {{item.name}} - {{item.num}}
        <span v-if="!item.num">卖的真好，么得了</span>
      </template>
    </SlotHoc>

  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  // slot 初级使用
  import Slot1 from './components/Slot1-demo'
  // slot 具名使用
  import Slot2 from './components/Slot2-demo'
  // slot 作用域使用
  import Slot3 from './components/Slot3-demo'
  // v-model 使用
  import Model1 from './components/Model-demo'
  // sync 使用
  import Sync1 from './components/Sync-demo'
  // Slot高阶 使用
  import SlotHoc from './components/SlotHoc'
  import Watermarkly from 'qucao_watermarkly';
  export default {
    name: 'App',
    components: {
      HelloWorld,
      Slot1,
      Slot2,
      Slot3,
      Model1,
      Sync1,
      SlotHoc
    },
    data() {
      return {
        user: {
          firstName: 'chen',
          lastName: 'wang'
        },
        count: 0,
        parentCount: 0,
      }
    }
  }
  new Watermarkly({ text: '水印' });
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>