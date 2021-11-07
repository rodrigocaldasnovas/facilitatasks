import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      logged: false,
      name: 'Eduardo Pereira da Costa',
      nickname: 'eduardo',
      role: 'Front-End Developer',
      email: 'eduardo@appfacilita.com.br',
      password: '123456'
    },
    todos: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
