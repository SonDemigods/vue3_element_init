// 导入vue-router
import { createRouter, createWebHistory } from 'vue-router'

// 导入路由列表
import business from '@/router/business.routes'
import common from '@/router/common.routes'

// 创建路由
const ROUTER = createRouter({
  // hash模式：createWebHashHistory，history模式：createWebHistory
  history: createWebHistory(),
  routes: [
    ...common,
    {
      path: '/Main',
      name: 'Main',
      component: () => import(/* webpackChunkName: "Layout" */ '@/layout/index.vue'),
      children: [...business],
    },
  ],
})

export default ROUTER
