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

const user = {
  logged: false,
  firstname: 'Eduardo Pereira',
  lastname: 'da Costa',
  username: 'eduardo',
  role: 'Front-End Developer',
  email: 'eduardo@appfacilita.com.br',
  password: '123456'
}

export default new Vuex.Store({
  state: {
    auth: {
      user: {},
      token: ''
    },
    todos: [],
    todos_full: [],
    searchBy: '',
    filterBy: 'all',
    importants: 0,
    urgents: 0
  },
  mutations: {
    updateField,
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
      let data = ''
      if (state.searchBy !== '') {
        data = state.todos_full.filter(item => {
          return ((item.title.indexOf(state.searchBy) !== -1) || (item.description.indexOf(state.searchBy) !== -1))
        })
      } else {
        data = state.todos_full
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
      // completeds = ((state.filterBy === 'all') || ()) ? completeds : {}
      // completeds = state.filterBy ? completeds : {}
      state.todos = [
        ...completeds,
        ...urgents,
        ...importants,
        ...anothers
      ]
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
    }
  },
  getters: {
    getField,
    hasToken ({ token }) {
      return !!token
    }
  },
  actions: {
    ActionFiltre (context) {
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
    ActionCheckToken ({ dispatch, state }) {
      if (state.token) {
        return state.token
      }
      const token = storage.getLocalToken()
      if (!token) {
        return false
      }
      dispatch('ActionSetToken', token)
      dispatch('ActionLoadSession')
    },
    ActionSetToken (context, payload) {
      storage.setLocalToken(payload)
      context.commit('setToken', payload)
    },
    ActionSetUser (context, payload) {
      context.commit('setUser', payload)
    },
    ActionLoadSession ({ dispatch }) {
      const token = storage.getLocalToken()
      if (token) {
        dispatch('ActionSetUser', user)
        // return token
      } else {
        dispatch('ActionLogout')
        // return false
      }
      // })
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
