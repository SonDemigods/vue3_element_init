import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 路径别名
    alias: {
      // 项目根路径
      '@': '/src',
      // 组件路径
      '_c': '/src/components',
      // 资源路径
      '_a': '/src/assets'
    }
  },
  plugins: [vue()]
})
