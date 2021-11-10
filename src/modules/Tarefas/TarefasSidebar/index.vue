<template>
  <div class="tarefas-sidebar">
    <my-label class="bold medium colorDarkMedium mb-50">Categorias</my-label>
    <sidebar-menuitem caption="Todas" :active="filterBy === 'all'" @click.native="setFilter('all')"/>
    <sidebar-menuitem caption="Urgentes" :urgents="urgents"
    @click.native="setFilter('urgents')" :active="filterBy === 'urgents'"/>
    <sidebar-menuitem caption="Importantes" :importants="importants"
    @click.native="setFilter('importants')" :active="filterBy === 'importants'"/>
    <sidebar-menuitem caption="Outras" @click.native="setFilter('anothers')"
    :active="filterBy === 'anothers'"/>
    <sidebar-menuitem caption="Finalizadas" @click.native="setFilter('completeds')"
    :active="filterBy === 'completeds'"/>
  </div>
</template>

<script>
import SidebarMenuitem from './SidebarMenuitem'
import MyLabel from '../../../components/MyLabel.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'TarefasSidebar',
  components: {
    MyLabel,
    SidebarMenuitem
  },
  computed: {
    ...mapState(['importants', 'urgents', 'filterBy'])
  },
  methods: {
    ...mapActions(['ActionSetFiltre']),
    setFilter (filtro) {
      this.ActionSetFiltre(filtro)
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
