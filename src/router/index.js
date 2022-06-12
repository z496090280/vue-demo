/*
 * @Author: your name
 * @Date: 2021-04-04 21:06:47
 * @LastEditTime: 2022-06-12 22:13:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-watermark\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Table from '../views/Table.vue'
import Form from '../views/Form.vue'
import Components from '../views/Components.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/Components',
    name: 'Components',
    component: Components
  },
]

const router = new VueRouter({
  routes
})

export default router
