// 导入创建函数
import { createApp } from 'vue'

// 导入ui组件
import ElementPlus from 'element-plus'
// 导入ui组件的样式文件
import 'element-plus/lib/theme-chalk/index.css'

// 导入lodash
import _ from 'lodash'

// 导入ajax函数
import api from '@/api'

// 导入根组件
import App from './App.vue'

// 导入路由
import router from '@/router'

// 创建vue实例
const app = createApp(App)


// globalProperties 为应用内全局 property，代替 Vue 2.x Vue.prototype

// 绑定lodash
app.config.globalProperties.$_ = _

// 绑定ajax方法
app.config.globalProperties.$api = api

// 加载路由
app.use(router)

// 使用ui组件
app.use(ElementPlus)

// 将vue实例挂载到dom上
app.mount('#app')
