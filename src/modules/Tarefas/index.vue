<template>
  <layout-basico>
    <div class="module-tarefas">
      <tarefas-sidebar></tarefas-sidebar>
      <div class="tarefas-body">
        <my-card>
          <my-label id="minhasFarefas" class="bold colorDarker veryStrong">Minhas Tarefas</my-label>
          <my-label id="minhasFarefas" class="bold colorDarker medium mb-30"
          >Olá <span class="destaqueBlue">{{ auth.user.firstname }}</span>, você tem
          <span class="destaqueBlue">4 tarefas</span> pendentes.</my-label>
          <div class="submit-line mb-30">
            <input type="text" class="medium mb-15 background"
            v-model="username" required placeholder="Buscar Tarefas">
            <button id="buttonSearch" class="submit-lente" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </div>
          <div class="grid-todos">
            <div class="grid-todos-item mb-5">
              <div class="item-chk grid-todos-item-completed mr-15"></div>
              <my-label class="item-tit bold colorDarkLow small">Minhas Tarefas</my-label>
              <div class="item-label">S</div>
              <div class="item-options">S</div>
            </div>
            <div class="grid-todos-item mb-5">
              <div class="item-chk grid-todos-item-completed mr-15"></div>
              <my-label class="item-tit bold colorDarkLow small">Minhas Tarefas</my-label>
              <div class="item-label">S</div>
              <div class="item-options">S</div>
            </div>
            <div class="grid-todos-item mb-5">
              <div class="item-chk grid-todos-item-completed mr-15"></div>
              <my-label class="item-tit bold colorDarkLow small">Minhas Tarefas</my-label>
              <div class="item-label">S</div>
              <div class="item-options">S</div>
            </div>
            <div class="grid-todos-item mb-5">
              <div class="item-chk grid-todos-item-completed mr-15"></div>
              <my-label class="item-tit bold colorDarkLow small">Minhas Tarefas</my-label>
              <div class="item-label">S</div>
              <div class="item-options">S</div>
            </div>
            <div class="grid-todos-item mb-5">
              <div class="item-chk grid-todos-item-completed mr-15"></div>
              <my-label class="item-tit bold colorDarkLow small">Minhas Tarefas</my-label>
              <div class="item-label">S</div>
              <div class="item-options">S</div>
            </div>
            <div class="grid-todos-item mb-5">
              <div class="item-chk grid-todos-item-completed mr-15"></div>
              <my-label class="item-tit bold colorDarkLow small">Minhas Tarefas</my-label>
              <div class="item-label">S</div>
              <div class="item-options">S</div>
            </div>
            <div class="grid-todos-item mb-5">
              <div class="item-chk grid-todos-item-completed mr-15"></div>
              <my-label class="item-tit bold colorDarkLow small">Minhas Tarefas</my-label>
              <div class="item-label">S</div>
              <div class="item-options">S</div>
            </div>
            <div class="grid-todos-item mb-5">
              <div class="item-chk grid-todos-item-completed mr-15"></div>
              <my-label class="item-tit bold colorDarkLow small">Minhas Tarefas</my-label>
              <div class="item-label">S</div>
              <div class="item-options">S</div>
            </div>
            <div class="grid-todos-item mb-5">
              <div class="item-chk grid-todos-item-completed mr-15"></div>
              <my-label class="item-tit bold colorDarkLow small">Minhas Tarefas</my-label>
              <div class="item-label">S</div>
              <div class="item-options">S</div>
            </div>
            <div class="grid-todos-item mb-5">
              <div class="item-chk grid-todos-item-completed mr-15"></div>
              <my-label class="item-tit bold colorDarkLow small">Minhas Tarefas</my-label>
              <div class="item-label">S</div>
              <div class="item-options">S</div>
            </div>
            <div class="grid-todos-item mb-5">
              <div class="item-chk grid-todos-item-completed mr-15"></div>
              <my-label class="item-tit bold colorDarkLow small">Minhas Tarefas</my-label>
              <div class="item-label">S</div>
              <div class="item-options">S</div>
            </div>
            <div class="grid-todos-item mb-5">
              <div class="item-chk grid-todos-item-completed mr-15"></div>
              <my-label class="item-tit bold colorDarkLow small">Minhas Tarefas</my-label>
              <div class="item-label">S</div>
              <div class="item-options">S</div>
            </div>
            <div class="grid-todos-item mb-5">
              <div class="item-chk grid-todos-item-completed mr-15"></div>
              <my-label class="item-tit bold colorDarkLow small">Minhas Tarefas</my-label>
              <div class="item-label">S</div>
              <div class="item-options">S</div>
            </div>
            <div class="grid-todos-item mb-5">
              <div class="item-chk grid-todos-item-completed mr-15"></div>
              <my-label class="item-tit bold colorDarkLow small">Minhas Tarefas</my-label>
              <div class="item-label">S</div>
              <div class="item-options">S</div>
            </div>
            <div class="grid-todos-item mb-5">
              <div class="item-chk grid-todos-item-completed mr-15"></div>
              <my-label class="item-tit bold colorDarkLow small">Minhas Tarefas</my-label>
              <div class="item-label">S</div>
              <div class="item-options">S</div>
            </div>
          </div>
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
import { mapState } from 'vuex'
export default {
  name: 'Tarefas',
  data: function () {
    return {
      showEditTodo: false
    }
  },
  computed: {
    ...mapState(['todos', 'auth'])
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
  z-index:10
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
  overflow: scroll
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
  grid-grid-template-areas: "CK TT ST OP"
.grid-todos-item-completed
  background: #E2EEF5
  width: 33px
  height: 32px
.item-chk
  grid-grid-area: CK
.item-tit
  grid-grid-area: TT
.item-label
  grid-grid-area: ST
  background-color: red
  width: 100%
.item-options
  grid-grid-area: OP
  background-color: green
  width: 100%
</style>
