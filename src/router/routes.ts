export default [{
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