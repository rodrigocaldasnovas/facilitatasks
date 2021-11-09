<template>
  <div class="action-button backGreenSpecial"><slot></slot></div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.action-button
  position: absolute;
  width: 77px
  height: 77px
  font-size: 31px
  bottom: 25px
  right: 25px
  border-radius: 50%
  filter: drop-shadow(0px 3px 20px rgba(130, 153, 166, 0.25))
  display: flex
  align-items: center
  justify-content: center
  cursor: pointer
</style>
