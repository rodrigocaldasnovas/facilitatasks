<template>
  <layout-basico>
    <div class="module-tarefas" @click="outside">
      <tarefas-sidebar></tarefas-sidebar>
      <div class="tarefas-body">
        <my-card>
          <my-label id="minhasFarefas" class="bold colorDarker veryStrong">Minhas Tarefas</my-label>
          <my-label id="minhasFarefas" class="bold colorDarker medium mb-30"
          >Olá <span class="destaqueBlue">{{ auth.user.firstname }}</span>, você tem
          <span class="destaqueBlue">{{ allUncom }} tarefas</span> pendentes.</my-label>
          <div class="submit-line mb-30">
            <input type="text" class="responsive medium mb-15 background" v-model="searchBy"
            required placeholder="Buscar Tarefas">
            <button id="buttonSearch" class="submit-lente" @click="pesquise" type="button">
              <i class="fa fa-search"></i>
            </button>
          </div>
          <div class="grid-todos ">
            <div class="grid-todos-item mb-5" :class="{completed:item.completed}" v-for="(item, index) in todos" :key="index">
              <div class="item-chk grid-todos-item-completed mr-15 ">
                <img src="@/assets/itemcheck.png" v-if="!item.completed" @click="check(item)"/>
                <img src="@/assets/itemchecked.png" v-else @click="uncheck(item)"/>
              </div>
              <my-label class="item-tit bold colorDarkLow small"
              :class="{riscado:item.completed}">{{item.title}}</my-label>
              <div class="item-label">
                <my-spam class="backColorDanger" v-if="item.urgent">Urgente</my-spam>
                <my-spam class="backColorAlert" v-if="item.important">Importante</my-spam>
              </div>
              <div class="item-options" @click.stop="openThis(item.id)" >
                <img src="@/assets/tree.png" />
                <div class="box-menu" v-show="openId === item.id">
                  <img class="dropdown-menu-img" src="@/assets/treeblue.png" />
                  <div class="options-drop">
                    <div class="dropdown-item" @click.stop="editar(item)">
                      <img src="@/assets/greenbol.png"/>
                      <my-label class="item-tit bold colorDarkLow small">Editar</my-label>
                    </div>
                    <div class="dropdown-item" @click.stop="excluir(item)">
                      <img src="@/assets/bluebol.png"/>
                      <my-label class="item-tit bold colorDarkLow small">Excluir</my-label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </my-card>
      </div>
      <action-button @click.native="addTodo()"><i class="colorLight fas fa-plus"></i></action-button>
      <modal name="addTodoForm" width="660px" height="488px" :adaptive="true">
        <add-item></add-item>
      </modal>
      <modal name="updateTodoForm" width="660px" height="488px" :adaptive="true">
        <edit-item :item="item"></edit-item>
      </modal>
      <modal name="deleteTodoForm" width="477px" height="345px" :adaptive="true">
        <excluir-item :item="item"></excluir-item>
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
import EditItem from './EditItem'
import ExcluirItem from './ExcluirItem'
import TarefasSidebar from './TarefasSidebar'
import { mapState, mapActions } from 'vuex'
import MySpam from '../../components/My-Spam.vue'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Tarefas',
  data: function () {
    return {
      showEditTodo: false,
      openId: '',
      item: {},
      menuDropDown: false,
      opening: false
    }
  },
  computed: {
    ...mapState(['todos', 'auth', 'allUncom']),
    ...mapFields(['searchBy'])
  },
  components: {
    LayoutBasico,
    MyLabel,
    TarefasSidebar,
    MyCard,
    ActionButton,
    AddItem,
    EditItem,
    MySpam,
    ExcluirItem
  },
  methods: {
    ...mapActions(['ActionCheck', 'ActionUncheck', 'ActionSearch']),
    closeSearch () {
      this.openId = ''
    },
    outside () {
      if (this.opening) {
        this.opening = false
        this.openId = ''
      }
    },
    editar (item) {
      this.openId = ''
      this.item = item
      this.$modal.show('updateTodoForm')
    },
    excluir (item) {
      this.openId = ''
      this.item = item
      this.$modal.show('deleteTodoForm')
    },
    openThis (id) {
      this.opening = true
      this.openId = id
    },
    addTodo () {
      this.$modal.show('addTodoForm')
    },
    check (item) {
      this.ActionCheck(item)
    },
    uncheck (item) {
      this.ActionUncheck(item)
    },
    pesquise () {
      this.ActionSearch()
    }
  }
}
</script>

<style lang="stylus">
.module-tarefas
  display: flex
.tarefas-body
  width: 100%
  display: flex
  align-items: center
  justify-content: center
#minhasFarefas
  height: 27px
.lightFont
  color: #A6C1D2
#buttonSearch
  font-size: 25px
  color: #AECBDE
  position:absolute
  top: 0px
  right: 13px
  z-index: var(--top-3)
  border:none
  background:transparent
  outline:none
  cursor pointer
.submit-line
  position: relative
  height: 55px
.grid-todos
  width: 100%
  height: calc(100vh - 300px)
  overflow-y: auto
.grid-todos-item
  height: 64px
  width: 100%
  background: #FFFFFF
  box-shadow: 0px 1px 6px rgba(40, 56, 72, 0.1)
  border-radius: 5px
  padding: 16px
  display: grid
  align-items: center
  grid-template-columns: 45px auto 117px 10px
  grid-template-areas: "CK TT ST OP"
.item-chk
  grid-grid-area: CK
  cursor pointer
.item-tit
  grid-grid-area: TT
.item-label
  grid-grid-area: ST
  display: flex
  align-items: center
  justify-content: center
  width: 100%
.item-options
  grid-grid-area: OP
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  position: relative
.completed
  opacity : 0.5
.riscado
  text-decoration: line-through
.options-drop
  display: flex
  flex-direction: column
  height: 100%
  justify-content: space-between
.dropdown-item
  display: flex
  align-items: center
.dropdown-item > img
  margin-right: 10px
.dropdown-menu-img
  position: absolute
  right: 10px
  top: 15px
.box-menu
  background: #fff
  width: 110px
  position: absolute
  top: -15px
  left: -95px
  height: 74px
  box-shadow: 0px 0px 8px 2px rgba(49, 81, 113, 0.1)
  border-radius: 5px
  min-width: 109px
  padding: 15px 11px
</style>
