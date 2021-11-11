<template>
  <div class="my-card" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MyCard'
}
</script>

<style lang="stylus">
@media screen and (min-width: 980px)
  .my-card
    width: 645px
@media screen and (max-width: 980px)
  .my-card
    width: 95%
</style>
