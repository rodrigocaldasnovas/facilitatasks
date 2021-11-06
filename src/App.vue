<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
@import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
@font-face
  font-family SVN-Gilroy
  font-weight 400
  font-style normal
  font-display auto;
  src url("/fonts/gilroy-font/SVN-Gilroy Regular.ttf")
#app
  font-family SVN-Gilroy, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
