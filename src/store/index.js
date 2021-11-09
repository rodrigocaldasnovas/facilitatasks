import Vue from 'vue'
import Vuex from 'vuex'
import * as storage from '../modules/login/storage'
import _ from 'lodash'
import shortid from 'shortid'

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
    todos: []
  },
  mutations: {
    check (state, payload) {
      debugger
      state.todos = state.todos.map(item => {
        if (item.id === payload.id) {
          return { ...item, completed: true }
        } else {
          return item
        }
      })
    },
    uncheck (state, payload) {
      state.todos = state.todos.map(item => {
        if (item.id === payload.id) {
          return { ...item, completed: false }
        } else {
          return item
        }
      })
    },
    orderTodos (state) {
      let completeds = state.todos.filter(item => {
        return item.completed
      })
      const uncompleteds = state.todos.filter(item => {
        return !item.completed
      })
      let urgents = uncompleteds.filter(item => {
        return item.urgent
      })
      let importants = uncompleteds.filter(item => {
        return item.important
      })
      let anothers = uncompleteds.filter(item => {
        return item.another
      })
      completeds = _.orderBy(completeds, ['title', 'description'], ['asc', 'asc'])
      urgents = _.orderBy(urgents, ['title', 'description'], ['asc', 'asc'])
      importants = _.orderBy(importants, ['title', 'description'], ['asc', 'asc'])
      anothers = _.orderBy(anothers, ['title', 'description'], ['asc', 'asc'])
      this.state.todos = [
        ...completeds,
        ...urgents,
        ...importants,
        ...anothers
      ]
    },
    addTodo (state, payload) {
      const id = shortid.generate()
      state.todos = [...state.todos, { id, ...payload }]
    },
    setToken (state, payload) {
      state.auth.token = payload
    },
    setUser (state, payload) {
      state.auth.user = payload
    }
  },
  getter: {
    hasToken ({ token }) {
      return !!token
    }
  },
  actions: {
    ActionCheck (context, payload) {
      context.commit('check', payload)
      context.commit('orderTodos')
    },
    ActionUncheck (context, payload) {
      context.commit('uncheck', payload)
      context.commit('orderTodos')
    },
    ActionAddTodo (context, payload) {
      context.commit('addTodo', payload)
      context.commit('orderTodos')
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
  modules: {
  }
})
