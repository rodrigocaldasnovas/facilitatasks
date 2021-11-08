<template>
  <layout-basico>
    <div class="module-dashboard">
      <my-label class="bold colorDarker veryStrong">Dashboard</my-label>
    </div>
  </layout-basico>
</template>

<script>
import LayoutBasico from '@/components/layouts/LayoutBasico'
import MyLabel from '../../components/MyLabel.vue'
export default {
  name: 'Dashboard',
  components: {
    LayoutBasico,
    MyLabel
  }
}
</script>

<style lang="stylus">
.module-dashboard
  display: flex
  align-items: center
  justify-content: center
  height: calc(100vh - 83px)
</style>
