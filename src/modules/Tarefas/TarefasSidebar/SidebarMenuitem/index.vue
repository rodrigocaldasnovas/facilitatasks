<template>
  <div class="sidebar-menuitem mb-15">
    <botao-arrow></botao-arrow>
    <my-label class="semi-bold colorDark small mr-5">
      {{caption}}
    </my-label>
    <spam-status type="alert"></spam-status>
  </div>
</template>

<script>
import MyLabel from '../../../../components/MyLabel.vue'
import BotaoArrow from './BotaoArrow.vue'
import SpamStatus from '../../../../components/SpamStatus.vue'
export default {
  name: 'SidebarMenuitem',
  props: [
    'caption',
    'importants',
    'urgents'
  ],
  components: {
    MyLabel,
    BotaoArrow,
    SpamStatus
  }
}
</script>

<style lang="stylus">
.sidebar-menuitem
  height 25px
  border-radius: 100px
  width: 150px
  display: flex
  align-items: center
  cursor pointer
  &:hover
    background-color: #d8dde3
</style>
