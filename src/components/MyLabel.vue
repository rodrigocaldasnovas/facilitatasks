<template>
  <div class="label " :class="genClass()"><slot></slot></div>
</template>

<script>
export default {
  props: [
    'size', 'styleFont'
  ],
  methods: {
    genClass () {
      console.log(this.bold + ' bold')
      return {
        small: this.size ? this.size === 'small' : false,
        medium: this.size ? this.size === 'medium' : false,
        [this.styleFont]: this.styleFont ? this.styleFont : false
      }
    }
  }
}
</script>

<style lang="stylus">
.small
  font-size 13px
.medium
  font-size 18px
.bold
  font-family SVN-Gilroy-Bold

</style>
