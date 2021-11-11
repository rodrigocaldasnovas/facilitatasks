<template>
  <div id="app">
    <base-spinner/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import BaseSpinner from './components/tools/BaseSpinner.vue'

export default {
  components: {
    BaseSpinner
  },
  mounted () {
    this.$root.$emit('Spinner::hide')
    // window.uid = null
    // this.$router.push({ name: window.uid ? 'Dashboard' : 'Login' })
    // setTimeout(() => {
    //   this.$root.$emit('Spinner::hide')
    // }, 3000)
  }
}
</script>

<style lang="stylus">
@import "./assets/variables.styl"
@import "./assets/global.styl"
#app
  font-family SVN-Gilroy, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width: 100vw
  height: 100vh
</style>
