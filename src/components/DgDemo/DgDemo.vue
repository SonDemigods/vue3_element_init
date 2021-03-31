<template>
  <div>
    <el-button type="primary"
               @click="handlerCountAdd">当前计数{{ count }}</el-button>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'DgDemo',
  props: {},
  setup: () => {
    const count = ref(0)
    const handlerCountAdd = () => {
      count.value++
    }
    return { count, handlerCountAdd }
  }
})
</script>
<style lang="scss" scoped>
</style>