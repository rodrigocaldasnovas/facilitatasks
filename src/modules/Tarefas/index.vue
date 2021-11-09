<template>
  <layout-basico>
    <div class="module-tarefas">
      <tarefas-sidebar></tarefas-sidebar>
      <div class="tarefas-body">
        <my-card>
          <my-label class="bold colorDarker veryStrong">Minhas Tarefas</my-label>

        </my-card>
      </div>
      <action-button @click.native="addTodo()"><i class="colorLight fas fa-plus"></i></action-button>
      <modal name="addTodoForm" width="660px" height="488px" :adaptive="true">
        <add-item></add-item>
      </modal>
    </div>
  </layout-basico>
</template>

<script>
import LayoutBasico from '@/components/layouts/LayoutBasico'
import MyLabel from '@/components/MyLabel.vue'
import MyCard from '@/components/MyCard'
import ActionButton from '@/components/ActionButton'
import AddItem from './AddItem'
import TarefasSidebar from './TarefasSidebar'
export default {
  name: 'Tarefas',
  data: function () {
    return {
      showEditTodo: false
    }
  },
  components: {
    LayoutBasico,
    MyLabel,
    TarefasSidebar,
    MyCard,
    ActionButton,
    AddItem
  },
  methods: {
    addTodo () {
      this.$modal.show('addTodoForm')
    }
  }
}
</script>

<style lang="stylus">
.module-tarefas
  display: flex
.tarefas-body
  width: 100%
  // background-color: red
  display: flex
  align-items: center
  justify-content: center
</style>
