export default [{
  path: '/Home',
  name: 'Home',
  meta: {
    title: '首页',
    menuHide: false
  },
  component: () => import(/* webpackChunkName: "Home" */ '@/views/System/Home/index.vue')
}, {
  path: '/PageDemo',
  name: 'PageDemo',
  meta: {
    title: '示例页面',
    menuHide: false
  },
  children: [
    {
      path: 'Home1',
      name: 'Home1',
      meta: {
        title: '子页面',
        icon: 's-grid',
        menuHide: false
      },
      component: () => import(/* webpackChunkName: "Home" */ '@/views/System/Home/index.vue')
    },
  ],
  component: () => import(/* webpackChunkName: "PageDemo" */ '@/views/Business/PageDemo/index.vue')
}]