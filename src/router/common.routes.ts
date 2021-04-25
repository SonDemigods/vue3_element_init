export default [{
  path: '/',
  redirect: '/Home'
}, {
  path: '/Login',
  name: 'Login',
  meta: {
    title: '登录',
    menuHide: true
  },
  component: () => import(/* webpackChunkName: "Login" */ '@/views/System/Login/index.vue')
}, {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  meta: {
    title: '页面未找到',
    menuHide: true
  },
  component: () => import(/* webpackChunkName: "NotFound" */ '@/views/System/Error/404.vue')
}]