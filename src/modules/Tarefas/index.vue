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
      <my-modal :show="showEditTodo">
        sjdhsjdhsjds
      </my-modal>
    </div>
  </layout-basico>
</template>

<script>
import LayoutBasico from '@/components/layouts/LayoutBasico'
import MyLabel from '@/components/MyLabel.vue'
import MyCard from '@/components/MyCard'
import ActionButton from '@/components/ActionButton'
import MyModal from '@/components/MyModal'
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
    MyModal
  },
  methods: {
    addTodo () {
      this.showEditTodo = true
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
