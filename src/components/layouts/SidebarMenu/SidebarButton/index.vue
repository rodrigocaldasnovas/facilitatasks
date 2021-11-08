<template>
  <div class="sidebar-button" :class="{'sidebar-button-active':this.$router.history.current.name === route}"
  @click="goRoute(route)">
    <i class="mb-5 colorLight" :class="icon" v-if="icon"></i>
    <img class="mb-5" src="../../../../assets/gears.png" v-if="image"/>
    <my-label class="bold colorLight verySmall">{{name}}</my-label>
  </div>
</template>

<script>
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
    goRoute (route) {
      this.$router.push({ name: route })
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
.sidebar-button-active
  background-color #1182F2
</style>
