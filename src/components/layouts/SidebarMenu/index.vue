<template>
  <div class="sidebar-menu" :class="{'sidebar-menu-visible':visible,'sidebar-menu-hidden':!visible}">
    <div class="sidebar-area-logo">
      <img alt="FacilitaTasks" src="../../../assets/logo-solo.png">
    </div>
    <div class="sidebar-area-body">
      <sidebar-button class="sidebar-button"
      name="Dashboard" icon="fas fa-chart-bar" route="/dashboard"/>
      <sidebar-button class="sidebar-button"
      name="Tarefas" icon="far fa-check-circle" route="/tarefas"/>
      <!-- Este terceiro icone era pro, entao improvisei com imagem dele -->
      <sidebar-button class="sidebar-button"
      name="Configurações" image="gears" route="/configuracoes"/>
      <sidebar-button class="sidebar-button"
      name="Sair" image="door" route="/configuracoes"/>
    </div>
  </div>
</template>

<script>
import SidebarButton from './SidebarButton'
export default {
  name: 'SidebarMenu',
  data: function () {
    return {
      visible: false
    }
  },
  components: {
    SidebarButton
  },
  created () {
    this.$root.$on('SidebarMenu::show', () => {
      this.visible = true
    })
    this.$root.$on('SidebarMenu::hide', () => {
      this.visible = false
    })
  }
}
</script>

<style lang="stylus">
@media screen and (min-width: 740px)
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
    a
      text-decoration: none
@media screen and (max-width: 740px)
  .sidebar-menu-visible
    display: block !important
  .sidebar-menu-hidden
    display: none !important
  .sidebar-menu
    background-color: #2693FF
    top 0
    bottom 0
    right 0
    left 0
    position absolute
    width 100vw
    height 100vh
    display flex
    flex-direction: column
    z-index var(--top-10)
    align-items center
    justify-content center
  .sidebar-area-body
    display: flex
    align-items: center
    justify-content: center
    flex-wrap: wrap
    margin: 15px
    a
      text-decoration: none
  .sidebar-button
    margin: 15px
  .sidebar-area-logo
    height: 85px
    width: 106px
    display: flex
    align-items: center
    justify-content: center
</style>
