<template>
  <div class="tarefas-sidebar">
    <my-label class="bold medium colorDarkMedium mb-50">Categorias</my-label>
  </div>
</template>

<script>
import MyLabel from '../../../components/MyLabel.vue'
export default {
  name: 'TarefasSidebar',
  components: {
    MyLabel
  }
}
</script>

<style lang="stylus">
.tarefas-sidebar
  display: flex
  align-items: center
  // justify-content: center
  padding-left: 40px
  width: 227px
  height: calc(100vh - 83px)
  background: #F4FBFF
  box-shadow: 0px 1px 10px rgba(40, 56, 72, 0.06)
</style>
