<template>
  <div class="add-item">
    <div class="add-item-linha-close">
      <img id="closeButton" src="@/assets/close.png" @click="$modal.hide('updateTodoForm')" ref="myBtn"/>
    </div>
    <div class="add-item-body">
      <my-label class="bold colorDarker veryStrong mb-40">Editar Tarefa</my-label>
      <my-label class="semi-bold colorDarker small mb-5 mt-5">Título</my-label>
      <input type="text" class="mb-15" v-model="title" required>
      <my-label class="semi-bold colorDarker small mb-5 mt-5">Descrição:</my-label>
      <textarea id="msg" rows="5" v-model="descript"></textarea>
    </div>
    <div class="add-item-footer">
      <div class="add-item-footer-left">
        <div class="add-item-footer-left-item">
          <img class="mr-10" src="@/assets/checked.png" @click="checkUrgent(false)" v-if="urgent" />
          <img class="mr-10" src="@/assets/unchecked.png" @click="checkUrgent(true)" v-if="!urgent"/>
          <my-label class="semi-bold colorDarker small mb-5 mt-5 mr-10" @click.native="checkUrgent(true)">Urgente</my-label>
        </div>
        <div class="add-item-footer-left-item">
          <img class="mr-10" src="@/assets/checked.png" @click="checkImport(false)" v-if="important"/>
          <img class="mr-10" src="@/assets/unchecked.png" @click="checkImport(true)" v-if="!important"/>
          <my-label class="semi-bold colorDarker small mb-5 mt-5 mr-10" @click.native="checkImport(true)">Importante</my-label>
        </div>
        <div class="add-item-footer-left-item">
          <img class="mr-10" src="@/assets/checked.png" @click="checkAnother(false)" v-if="another"/>
          <img class="mr-10" src="@/assets/unchecked.png" @click="checkAnother(true)" v-if="!another"/>
          <my-label class="semi-bold colorDarker small mb-5 mt-5" @click.native="checkAnother(true)">Outro</my-label>
        </div>
      </div>
      <div class="add-item-footer-right">
        <button id="botaoAdicionar" class="primary" @click="update">Salvar</button>
      </div>
    </div>
  </div>
</template>

<script>
import MyLabel from '@/components/MyLabel.vue'
import { mapActions } from 'vuex'
export default {
  name: 'EditItem',
  data: function () {
    return {
      title: '',
      descript: '',
      important: false,
      urgent: false,
      another: true,
      id: ''
    }
  },
  props: ['item'],
  mounted () {
    console.log(this.item)
    this.title = this.item.title
    this.descript = this.item.descript
    this.important = this.item.important
    this.urgent = this.item.urgent
    this.another = this.item.another
    this.id = this.item.id
  },
  components: {
    MyLabel
  },
  methods: {
    ...mapActions(['ActionUpdateTodo']),
    checkImport () {
      this.important = true
      this.another = false
      this.urgent = false
    },
    checkUrgent () {
      this.urgent = true
      this.important = false
      this.another = false
    },
    checkAnother () {
      this.another = true
      this.urgent = false
      this.important = false
    },
    update () {
      if (!this.title) {
        alert('É preciso configurar um título')
        return false
      }
      if (!this.descript) {
        alert('É preciso configurar uma descricao')
        return false
      }
      this.ActionUpdateTodo({
        title: this.title,
        descript: this.descript,
        important: this.important,
        urgent: this.urgent,
        another: this.another,
        id: this.id
      })
      const elem = this.$refs.myBtn
      elem.click()
    }
  }
}
</script>

<style lang="stylus">
.add-item
  width 100%
  height 100%
.add-item-linha-close
  padding 19px 19px 0px 0px
  display: flex
  justify-content: flex-end
#closeButton
  cursor pointer
.add-item-body
  margin: 0px 40px 17px 40px
.add-item-footer
  display: flex
  justify-content: space-between
  margin: 0px 40px 0px 40px
.add-item-footer-left
  display: flex
  max-height: 24px
.add-item-footer-right
  display: flex
  max-height: 47px
#botaoAdicionar
  height: 47px
  width: 120px
</style>
