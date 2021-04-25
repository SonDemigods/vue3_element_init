<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Layout from '@/layout/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    Layout,
  },
})
</script>

<style lang="scss" scoped>
</style>