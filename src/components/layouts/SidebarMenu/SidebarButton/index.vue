<template>
  <div class="sidebar-button">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.sidebar-button
  width: 106px
  height: 83px
  border: 1px solid #46A3FF;
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
</style>
