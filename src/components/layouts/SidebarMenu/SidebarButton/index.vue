<template>
  <fragment>
    <router-link class="sidebar-button"
    :class="{'sidebar-button-active':this.$router.history.current.name === route}"
    :to="route" v-if="route !== ''">
      <i class="mb-5 colorLight" :class="icon" v-if="icon"></i>
      <img class="mb-5" src="../../../../assets/gears.png" v-if="image == 'gears'"/>
      <img class="mb-5" src="../../../../assets/door.png" v-if="image == 'door'"/>
      <my-label class="bold colorLight verySmall">{{name}}</my-label>
    </router-link>
    <div class="sidebar-button"  :class="{'sidebar-button-active':this.$router.history.current.name === route}"
    v-else @click="logout">
      <i class="mb-5 colorLight" :class="icon" v-if="icon"></i>
      <img class="mb-5" src="../../../../assets/gears.png" v-if="image == 'gears'"/>
      <img class="mb-5" src="../../../../assets/door.png" v-if="image == 'door'"/>
      <my-label class="bold colorLight verySmall">{{name}}</my-label>
    </div>
  </fragment>
</template>

<script>
import { mapActions } from 'vuex'
import MyLabel from '../../../../components/MyLabel.vue'
export default {
  name: 'SidebarButton',
  props: [
    'name',
    'icon',
    'route',
    'image'
  ],
  components: {
    MyLabel
  },
  methods: {
    ...mapActions(['ActionLogout']),
    logout () {
      this.$root.$emit('Spinner::show')
      this.ActionLogout()
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style lang="stylus">
.sidebar-button
  width: 106px
  height: 83px
  border: 1px solid #46A3FF;
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  cursor pointer
  &:hover
    background-color #3a8cdd
  i
    font-size 32px
    font-weight: 100
@media screen and (min-width: 740px)
  .sidebar-button-active
    background-color #1182F2
</style>
