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
.my-card
  background-color: white
</style>
