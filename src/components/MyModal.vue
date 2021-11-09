<template>
  <div class="my-modal" :class="{'my-modal-show':visible,'my-modal-hide':!visible}" @click="hide()">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MyModal',
  data: function () {
    return {
      visible: false
    }
  },
  props: [
    'show'
  ],
  watch: {
    show: function (newVal, oldVal) {
      console.log(newVal)
      this.visible = newVal
    }
  },
  mounted () {
    this.visible = this.show
  },
  methods: {
    hide () {
      this.visible = false
    }
  }
}
</script>

<style lang="stylus">
.my-modal
  position: fixed /* Stay in place */
  z-index: 1 /* Sit on top */
  left: 0
  top: 0
  width: 100% /* Full width */
  height: 100% /* Full height */
  overflow: auto /* Enable scroll if needed */
  background-color: rgb(0,0,0) /* Fallback color */
  background-color: rgba(0,0,0,0.4) /* Black w/ opacity */
.my-modal-show
  display: block /* Hidden by default */
.my-modal-hide
  display: none /* Hidden by default */
</style>
