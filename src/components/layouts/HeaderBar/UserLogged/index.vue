<template>
  <div class="user-logged">
    <img src="@/assets/avatar.png">
    <div class="user-logged-identify">
      <my-label class="bold dark small">{{auth.user.firstname + ' ' + auth.user.lastname}}</my-label>
      <my-label class="bold verySmall destaqueBlue">{{auth.user.office}}</my-label>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MyLabel from '@/components/MyLabel'
export default {
  name: 'UserLogged',
  components: { MyLabel },
  computed: {
    ...mapState(['auth'])
  }
}
</script>

<style lang="stylus">
@media screen and (min-width: 740px)
  .user-logged
    display: flex
  .user-logged-identify
    display: flex
    flex-direction: column
    justify-content: center
@media screen and (max-width: 740px)
  .user-logged
    display: flex
    img
      height: 35px
  .user-logged-identify
    display: none
</style>
