<template>
  <div class="user-logged">
    <img src="@/assets/avatar.png">
    <div class="user-logged-identify">
      <my-label class="bold dark small">{{auth.user.firstname + ' ' + auth.user.lastname}}</my-label>
      <my-label class="bold verySmall">{{office}} sdsd</my-label>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'UserLogged',
  computed: {
    ...mapState(['auth', 'office'])
  }
}
</script>

<style lang="stylus">
.user-logged
  display: flex
.user-logged-identify
  display: flex
  flex-direction: column
  justify-content: center
</style>
