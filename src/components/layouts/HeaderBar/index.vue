<template>
  <div class="header-bar">
    <i class="medium fas fa-bars" @click="openMenu"></i>
    <user-logged></user-logged>
  </div>
</template>

<script>
import UserLogged from './UserLogged'
export default {
  components: {
    UserLogged
  },
  methods: {
    openMenu () {
      this.$root.$emit('SidebarMenu::show')
    }
  }
}
</script>

<style lang="stylus">
@media screen and (min-width: 740px)
  .header-bar
    background: #FFFFFF
    box-shadow: 0px 1px 6px rgba(40, 56, 72, 0.07)
    min-height: 83px
    display: flex
    padding: 14px 33px
    justify-content: flex-end
    z-index var(--top-3)
  i
    display: none
@media screen and (max-width: 740px)
  .header-bar
    background: #FFFFFF
    box-shadow: 0px 1px 6px rgba(40, 56, 72, 0.07)
    min-height: 43px
    display: flex
    align-items: center
    padding: 5px 15px
    justify-content: space-between;
    z-index var(--top-9)
</style>
