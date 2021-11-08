<template>
  <layout-basico>
    <div class="module-tarefas">
      <tarefas-sidebar></tarefas-sidebar>
      <my-label class="bold colorDarker veryStrong">Tarefas</my-label>
    </div>
  </layout-basico>
</template>

<script>
import LayoutBasico from '@/components/layouts/LayoutBasico'
import MyLabel from '../../components/MyLabel.vue'
import TarefasSidebar from './TarefasSidebar'
export default {
  name: 'Tarefas',
  components: {
    LayoutBasico,
    MyLabel,
    TarefasSidebar
  }
}
</script>

<style lang="stylus">
.module-tarefas
  display: flex
</style>
