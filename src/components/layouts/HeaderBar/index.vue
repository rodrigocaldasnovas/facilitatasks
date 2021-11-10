<template>
  <div class="header-bar">
    <user-logged></user-logged>
  </div>
</template>

<script>
import UserLogged from './UserLogged'
export default {
  components: {
    UserLogged
  }
}
</script>

<style lang="stylus">
.header-bar
  background: #FFFFFF
  box-shadow: 0px 1px 6px rgba(40, 56, 72, 0.07)
  min-height: 83px
  display: flex
  padding: 14px 33px
  justify-content: flex-end
  z-index var(--top-3)
</style>
