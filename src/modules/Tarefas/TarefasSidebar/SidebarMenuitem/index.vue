<template>
  <div class="sidebar-menuitem mb-15">
    <botao-arrow :active="active"></botao-arrow>
    <my-label class="semi-bold small mr-5" :class="{colorDark:!active,colorFeatured:active}">
      {{caption}}
    </my-label>
    <spam-status type="alert" v-if="importants">{{ importants }}</spam-status>
    <spam-status type="danger" v-if="urgents">{{ urgents }}</spam-status>
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
    'urgents',
    'active'
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
