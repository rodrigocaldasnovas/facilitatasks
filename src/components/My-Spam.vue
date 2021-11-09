<template>
  <div class="my-spam verySmall bold"
  :class="{backColorDanger:type==='danger',backColorAlert:type==='alert'}"
  ><slot></slot></div>
</template>

<script>
export default {
  name: 'My-Spam',
  props: [
    'type'
  ]
}
</script>

<style lang="stylus">
.my-spam
  height: 20px
  padding: 0px 10px
  color: var(--light)
  display: flex
  justify-content: center
  align-items: center
  border-radius: 40px
</style>
