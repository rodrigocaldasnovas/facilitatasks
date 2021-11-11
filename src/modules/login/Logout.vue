<template>
  <div class="logout"></div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Logout',
  mouted () {
    this.$root.$emit('Spinner::show')
    this.ActionLogout()
  },
  methods: {
    ...mapActions(['ActionLogout'])
  }
}
</script>

<style>

</style>
