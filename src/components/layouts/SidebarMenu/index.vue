<template>
  <div class="sidebar-menu">
    <div class="sidebar-area-logo">
      <img alt="FacilitaTasks" src="../../../assets/logo-solo.png">
    </div>
    <div class="sidebar-area-body">
      <sidebar-button>
        <img class="mb-5" src="../../../assets/vector.png">
        <my-label class="bold colorLight verySmall">Dashboard</my-label>
      </sidebar-button>
      <sidebar-button>
        <img class="mb-5" src="../../../assets/check-circle.png">
        <my-label class="bold colorLight verySmall">Tarefas</my-label>
      </sidebar-button>
      <sidebar-button>
        <img class="mb-5" src="../../../assets/gears.png">
        <my-label class="bold colorLight verySmall">Configurações</my-label>
      </sidebar-button>
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
