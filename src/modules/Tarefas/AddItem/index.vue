<template>
  <div class="add-item">
    <div class="add-item-linha-close">
      <img id="closeButton" src="@/assets/close.png" @click="$modal.hide('addTodoForm')"/>
    </div>
    <div class="add-item-body">
      <my-label class="bold colorDarker veryStrong mb-40">Cadastrar Tarefa</my-label>
      <my-label class="semi-bold colorDarker small mb-5 mt-5">Título</my-label>
      <input type="text" class="mb-15" v-model="title" required>
      <my-label class="semi-bold colorDarker small mb-5 mt-5">Descrição:</my-label>
      <textarea id="msg" rows="5"></textarea>
    </div>
    <div class="add-item-footer">
      <div class="add-item-footer-left">
        <img class="mr-10" src="@/assets/checked.png" @click="checkUrgent(false)" v-if="urgent"/>
        <img class="mr-10" src="@/assets/unchecked.png" @click="checkUrgent(true)" v-if="!urgent"/>
        <my-label class="semi-bold colorDarker small mb-5 mt-5 mr-10">Urgente</my-label>
        <img class="mr-10" src="@/assets/checked.png" @click="checkImport(false)" v-if="important"/>
        <img class="mr-10" src="@/assets/unchecked.png" @click="checkImport(true)" v-if="!important"/>
        <my-label class="semi-bold colorDarker small mb-5 mt-5">Importante</my-label>
      </div>
    </div>
  </div>
</template>

<script>
import MyLabel from '@/components/MyLabel.vue'
export default {
  name: 'AddItem',
  data: function () {
    return {
      title: '',
      message: '',
      important: true,
      urgent: false
    }
  },
  components: {
    MyLabel
  },
  methods: {
    checkImport (check) {
      this.important = check
    },
    checkUrgent (check) {
      this.urgent = check
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
  margin: 0px 40px 0px 40px
.add-item-footer-left
  display: flex
</style>
