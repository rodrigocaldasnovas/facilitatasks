<template>
  <div class="excluir-item">
    <img class="mb-15" src="@/assets/lixeira.png"  />
    <my-label class="bold colorDark medium mb-5" >
      Tem certeza que deseja <span class="colorDanger">excluir</span> esta tarefa?
    </my-label>
    <my-label class="bold colorDark small mb-30" >
      Esta ação não poderá ser desfeita.
    </my-label>
    <div class="exluir-item-footer">
      <button class="backPrimary medium colorLight" @click="$modal.hide('deleteTodoForm')" ref="myBtn">Cancelar</button>
      <button class="backRedSpecial medium colorLight" @click="excluir">Excluir</button>
    </div>
  </div>
</template>

<script>
import MyLabel from '@/components/MyLabel.vue'
import { mapActions } from 'vuex'
export default {
  name: 'EcluirItem',
  props: ['item'],
  components: {
    MyLabel
  },
  methods: {
    ...mapActions(['ActionExcluir']),
    excluir () {
      this.ActionExcluir(this.item)
      const elem = this.$refs.myBtn
      elem.click()
    }
  }
}
</script>

<style lang="stylus">
.excluir-item
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  padding: 35px 40px
.exluir-item-footer
  display: flex
  justify-content: space-between
  max-height: 41px
  width: 100%
  button
    width: 120px
    height: 41px
</style>
