export default [{
  path: '/',
  redirect: '/Home'
}, {
  path: '/Home',
  name: 'Home',
  component: () => import(/* webpackChunkName: "Home" */ '@/views/System/Home/index.vue')
}, {
  path: '/Login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "Login" */ '@/views/System/Login/index.vue')
}, {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import(/* webpackChunkName: "NotFound" */ '@/views/System/Error/404.vue')
}]