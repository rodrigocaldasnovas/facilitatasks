<template>
  <div class="cmpCardWrap" :class="genClass()">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MyCard',
  props: [
    'size'
  ],
  methods: {
    genClass () {
      return {
        sizeSmall: this.size ? this.size === 'small' : false,
        sizeMedium: this.size ? this.size === 'medium' : false
      }
    }
  }
}
</script>

<style lang="stylus">
.cmpCardWrap
  min-height: 100px
  min-width: 100px
@media screen and (min-width: 1248px)
  .sizeSmall
    width: 435px
@media screen and (min-width: 440px)
  .sizeSmall
    width: 435px
@media screen and (max-width: 440px)
  .sizeSmall
    width: 100vw
.sizeMedium
  width: 600px
</style>
