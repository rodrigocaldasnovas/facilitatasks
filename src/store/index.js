import Vue from 'vue'
import Vuex from 'vuex'
import * as storage from '../modules/login/storage'
import _ from 'lodash'
import shortid from 'shortid'
import { getField, updateField } from 'vuex-map-fields'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
var ls = new SecureLS({ isCompression: false })

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      user: {
        logged: false,
        firstname: 'Eduardo Pereira',
        lastname: 'da Costa',
        username: 'eduardo',
        role: 'Front-End Developer',
        email: 'eduardo@appfacilita.com.br',
        password: '123456',
        office: 'Front-end Developer'
      },
      token: ''
    },
    todos: [],
    todos_full: [],
    searchBy: '',
    filterBy: 'all',
    importants: 0,
    urgents: 0,
    allUncom: 0
  },
  mutations: {
    updateField,
    excluir (state, payload) {
      state.todos_full = state.todos_full.filter(item => {
        return (payload.id !== item.id)
      })
      state.todos = state.todos_full
    },
    check (state, payload) {
      state.todos_full = state.todos_full.map(item => {
        if (item.id === payload.id) {
          return { ...item, completed: true }
        } else {
          return item
        }
      })
    },
    uncheck (state, payload) {
      state.todos_full = state.todos.map(item => {
        if (item.id === payload.id) {
          return { ...item, completed: false }
        } else {
          return item
        }
      })
    },
    processTodos (state) {
      let data = state.todos_full
      const allUncompls = data.filter(item => {
        return !item.completed
      })
      state.allUncom = allUncompls.length
      if (state.searchBy !== '') {
        data = data.filter(item => {
          return ((item.title.indexOf(state.searchBy) !== -1) || (item.descript.indexOf(state.searchBy) !== -1))
        })
      }
      let completeds = data.filter(item => {
        return item.completed
      })
      const uncompleteds = data.filter(item => {
        return !item.completed
      })
      let urgents = uncompleteds.filter(item => {
        return item.urgent
      })
      let importants = uncompleteds.filter(item => {
        return item.important
      })
      state.importants = importants.length
      state.urgents = urgents.length
      let anothers = uncompleteds.filter(item => {
        return item.another
      })
      completeds = _.orderBy(completeds, ['title', 'description'], ['asc', 'asc'])
      urgents = _.orderBy(urgents, ['title', 'description'], ['asc', 'asc'])
      importants = _.orderBy(importants, ['title', 'description'], ['asc', 'asc'])
      anothers = _.orderBy(anothers, ['title', 'description'], ['asc', 'asc'])
      state.todos = []
      if ((state.filterBy === 'all') || (state.filterBy === 'completeds')) {
        state.todos = [...completeds]
      }
      if ((state.filterBy === 'all') || (state.filterBy === 'urgents')) {
        state.todos = [...state.todos, ...urgents]
      }
      if ((state.filterBy === 'all') || (state.filterBy === 'importants')) {
        state.todos = [...state.todos, ...importants]
      }
      if ((state.filterBy === 'all') || (state.filterBy === 'anothers')) {
        state.todos = [...state.todos, ...anothers]
      }
    },
    updateTodo (state, payload) {
      state.todos_full = state.todos_full.map(item => {
        return (payload.id === item.id) ? payload : item
      })
      state.todos = state.todos_full
    },
    addTodo (state, payload) {
      const id = shortid.generate()
      state.todos_full = [...state.todos_full, { id, ...payload }]
      state.todos = state.todos_full
    },
    setToken (state, payload) {
      state.auth.token = payload
    },
    setUser (state, payload) {
      state.auth.user = payload
    },
    setFilter (state, payload) {
      state.filterBy = payload
    }
  },
  getters: {
    getField,
    hasToken ({ auth }) {
      // console.log(!!token)
      return !!auth.token
    }
  },
  actions: {
    ActionExcluir (context, payload) {
      context.commit('excluir', payload)
      context.commit('processTodos')
    },
    ActionSetFiltre (context, payload) {
      context.commit('setFilter', payload)
      context.commit('processTodos')
    },
    ActionSearch (context) {
      context.commit('processTodos')
    },
    ActionCheck (context, payload) {
      context.commit('check', payload)
      context.commit('processTodos')
    },
    ActionUncheck (context, payload) {
      context.commit('uncheck', payload)
      context.commit('processTodos')
    },
    ActionAddTodo (context, payload) {
      context.commit('addTodo', payload)
      context.commit('processTodos')
    },
    ActionUpdateTodo (context, payload) {
      context.commit('updateTodo', payload)
      context.commit('processTodos')
    },
    ActionCheckToken ({ dispatch, state }) {
      if (state.auth.token) {
        return state.auth.token
      }
      return false
    },
    ActionSetToken (context, payload) {
      storage.setLocalToken(payload)
      context.commit('setToken', payload)
    },
    ActionSetUser (context, payload) {
      context.commit('setUser', payload)
    },
    ActionLogout ({ dispatch }) {
      dispatch('ActionSetUser', {})
      dispatch('ActionSetToken', '')
    }
  },
  plugins: [
    createPersistedState({
      key: 'facilitaTasks',
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key)
      }
    })
  ]
})
