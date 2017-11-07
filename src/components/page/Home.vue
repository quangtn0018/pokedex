<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <!-- your content -->
    <MainLayout></MainLayout>
  </div>
</template>

<script>
import MainLayout from '@/layout/MainLayout.vue'

export default {
  components: {
    'MainLayout': MainLayout
  },
  data () {
    return {}
  },
}
</script>

<style>
</style>
