// 导入创建函数
import { createApp } from 'vue'

// 导入ui组件
import ElementPlus from 'element-plus'
// 导入ui组件的样式文件
import 'element-plus/lib/theme-chalk/index.css'

// 导入根组件
import App from './App.vue'

// 创建vue实例
const app = createApp(App)

// 使用ui组件
app.use(ElementPlus)

// 将vue实例挂载到dom上
app.mount('#app')
