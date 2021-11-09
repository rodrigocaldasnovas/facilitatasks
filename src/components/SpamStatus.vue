<template>
  <div class="spam-status verySmall bold"
  :class="{backColorDanger:type==='danger',backColorAlert:type==='alert'}"
  ><slot></slot></div>
</template>

<script>
export default {
  name: 'SpamStatus',
  props: [
    'type'
  ]
}
</script>

<style lang="stylus">
.spam-status
  height: 20px
  width: 20px
  color: var(--light)
  display: flex
  justify-content: center
  align-items: center
  border-radius: 100px
</style>
