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
    window.uid = null
    this.$router.push({ name: window.uid ? 'Home' : 'Login' })
    setTimeout(() => {
      this.$root.$emit('Spinner::hide')
    }, 3000)
  }
}
</script>

<style lang="stylus">
@import "./assets/variables.styl"
@import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
@font-face
  font-family SVN-Gilroy
  font-weight 400
  font-style normal
  font-display auto;
  src url("/fonts/gilroy-font/SVN-Gilroy Regular.ttf")
*
  box-sizing: border-box
body
  margin 0
  padding: 0
  height 100vh
  width: 100vw
  background-color var(--light)
#app
  font-family SVN-Gilroy, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
