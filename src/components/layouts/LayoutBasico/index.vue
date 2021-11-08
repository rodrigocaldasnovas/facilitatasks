<template>
  <div class="layout-basico">
    <sidebar-menu></sidebar-menu>
    <div class="content">
      <header-bar>

      </header-bar>
    </div>
  </div>
</template>

<script>
import SidebarMenu from '../SidebarMenu'
import HeaderBar from '../HeaderBar'
export default {
  name: 'LayoutBasico',
  components: {
    SidebarMenu,
    HeaderBar
  }
}
</script>

<style lang="stylus">
.layout-basico
  height: 100vh
  display: flex
.content
  background-color: #E9F4FB
  height: 100vh
  width: 100%
  display: flex
  flex-direction: column
</style>
