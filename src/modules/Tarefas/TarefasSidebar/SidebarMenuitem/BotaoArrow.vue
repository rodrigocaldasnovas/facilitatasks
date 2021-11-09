<template>
  <div class="botao-arrow">
    <img src="../../../../assets/arrowon.png" v-if="active"/>
    <img src="../../../../assets/arrow.png" v-else/>
  </div>
</template>

<script>
export default {
  name: 'BotaoArrow',
  props: ['active']
}
</script>

<style lang="stylus">
.botao-arrow
  height 25px
  width: 25px
  display: flex
  justify-content: center
  align-items: center
  border-radius: 100px
</style>
