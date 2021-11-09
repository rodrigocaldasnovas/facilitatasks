<template>
  <div class="tarefas-sidebar">
    <my-label class="bold medium colorDarkMedium mb-50">Categorias</my-label>
    <sidebar-menuitem caption="Todas" :active="true" @click.native="teste"/>
    <sidebar-menuitem caption="Urgentes" :urgents="urgents"/>
    <sidebar-menuitem caption="Importantes" :importants="importants"/>
    <sidebar-menuitem caption="Outras"/>
    <sidebar-menuitem caption="Finalizadas"/>
  </div>
</template>

<script>
import SidebarMenuitem from './SidebarMenuitem'
import MyLabel from '../../../components/MyLabel.vue'
import { mapState } from 'vuex'
export default {
  name: 'TarefasSidebar',
  components: {
    MyLabel,
    SidebarMenuitem
  },
  computed: {
    ...mapState(['importants', 'urgents'])
  },
  methods: {
    teste () {
      console.log('teste')
    }
  }
}
</script>

<style lang="stylus">
.tarefas-sidebar
  display: flex
  flex-direction: column
  justify-content: center
  padding-left: 40px
  width: 227px
  height: calc(100vh - 83px)
  background: #F4FBFF
  box-shadow: 0px 1px 10px rgba(40, 56, 72, 0.06)
</style>
