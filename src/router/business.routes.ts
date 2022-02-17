export default [{
  path: '/Home',
  name: 'Home',
  meta: {
    title: '首页',
    menuHide: false
  },
  component: () => import(/* webpackChunkName: "Home" */ '@/views/System/Home/index.vue')
}, {
  path: '/Demo',
  name: 'Demo',
  meta: {
    title: '示例页面',
    menuHide: false
  },
  component: () => import(/* webpackChunkName: "Main" */ '@/layout/Main/index.vue'),
  children: [
    {
      path: '/PageDemo',
      name: 'PageDemo',
      meta: {
        title: '子页面',
        icon: 's-grid',
        menuHide: false
      },
      component: () => import(/* webpackChunkName: "PageDemo" */ '@/views/Business/PageDemo/index.vue')
    },
  ]
}, {
  path: '/Demo2',
  name: 'Demo2',
  meta: {
    title: '示例页面2',
    menuHide: false
  },
  component: () => import(/* webpackChunkName: "Main" */ '@/layout/Main/index.vue'),
  children: [
    {
      path: '/PageDemo2',
      name: 'PageDemo2',
      meta: {
        title: '子页面',
        icon: 's-grid',
        menuHide: false
      },
      component: () => import(/* webpackChunkName: "PageDemo2" */ '@/views/Business/PageDemo/index.vue')
    },
  ]
}]