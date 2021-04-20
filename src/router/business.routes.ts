export default [{
  path: '/PageDemo',
  name: 'PageDemo',
  component: () => import(/* webpackChunkName: "PageDemo" */ '@/views/Business/PageDemo/index.vue')
}]