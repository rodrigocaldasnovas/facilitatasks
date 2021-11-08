<template>
  <div class="sidebar-menu">
    <div class="sidebar-area-logo">
      <img alt="FacilitaTasks" src="../../../assets/logo-solo.png">
    </div>
    <div class="sidebar-area-body">
      <sidebar-button name="Dashboard" icon="fas fa-chart-bar" route="Dashboard"/>
      <sidebar-button name="Tarefas" icon="far fa-check-circle" route="Tarefas"/>
      <!-- Este terceiro icone era pro, entao improvisei com imagem dele -->
      <sidebar-button name="Configurações" image="gears" route="Configuracoes"/>
    </div>
  </div>
</template>

<script>
import SidebarButton from './SidebarButton'
export default {
  name: 'SidebarMenu',
  components: {
    SidebarButton
  }
}
</script>

<style lang="stylus">
.sidebar-menu
  background-color: #2693FF
  height: 100vh
  width: 106px
.sidebar-area-logo
  height: 85px
  width: 106px
  display: flex
  align-items: center
  justify-content: center
.sidebar-area-body
  height: calc(100vh - 85px)
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
</style>
