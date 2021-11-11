<template>
  <div class="logout"></div>
</template>

<script>
export default {
  name: 'Logout',
  mounted () {
    // debugger
    // setTimeout(function () {
    this.$root.$emit('Spinner::hide')
    // this.$router.push({ name: 'Login' })
    // }, 3000)
  }
}
</script>

<style>

</style>
