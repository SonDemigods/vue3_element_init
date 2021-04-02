<template>
  <el-container>

    <!-- header 页头 START -->
    <el-header>
      <Header />
    </el-header>
    <!-- header 页头 END -->

    <el-container>

      <!-- sidebar 侧边栏 START -->
      <el-aside width="200px">
        <Sidebar />
      </el-aside>
      <!-- sidebar 侧边栏 END -->

      <el-container>

        <!-- main 主显示区 START -->
        <el-main>
          <Main />
        </el-main>
        <!-- main 主显示区 END -->

        <!-- footer 页脚 START -->
        <el-footer>
          <Footer />
        </el-footer>
        <!-- footer 页脚 END -->

      </el-container>

    </el-container>

  </el-container>
</template>

<script>
import Header from '@/layout/Header/index.vue'
import Footer from '@/layout/Footer/index.vue'
import Sidebar from '@/layout/Sidebar/index.vue'
import Main from '@/layout/Main/index.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
    Sidebar,
    Main
  },
  props: {},
  setup () {

  }
}
</script>
<style lang="scss" scoped>
</style>