// 导入vue-router
import { createRouter, createWebHistory } from 'vue-router'

// 导入路由列表
import routes from './routes'

// 创建路由
const ROUTER = createRouter({
  // hash模式：createWebHashHistory，history模式：createWebHistory
  history: createWebHistory(),
  routes
})

export default ROUTER
