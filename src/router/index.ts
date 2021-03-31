// 导入vue-router
import { createRouter, createWebHistory } from 'vue-router'

// 创建路由
const ROUTER = createRouter({
  // hash模式：createWebHashHistory，history模式：createWebHistory
  history: createWebHistory(),
  routes: [{
    path: '/',
    redirect: '/Home'
  }, {
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home/index.vue')
  }, {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login/index.vue')
  }]
})

export default ROUTER
