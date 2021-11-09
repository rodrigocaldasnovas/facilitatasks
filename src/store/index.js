import Vue from 'vue'
import Vuex from 'vuex'
import * as storage from '../modules/login/storage'
import _ from 'lodash'

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
    addTodo (state, payload) {
      const todos = [...state.todos, payload]
      let urgents = todos.filter(item => {
        return item.urgent
      })
      let importants = todos.filter(item => {
        return item.important
      })
      let anothers = todos.filter(item => {
        return item.another
      })
      urgents = _.orderBy(urgents, ['title', 'description'], ['asc', 'asc'])
      importants = _.orderBy(importants, ['title', 'description'], ['asc', 'asc'])
      anothers = _.orderBy(anothers, ['title', 'description'], ['asc', 'asc'])
      this.state.todos = [
        ...urgents,
        ...importants,
        ...anothers
      ]
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
    ActionAddTodo (context, payload) {
      context.commit('addTodo', payload)
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
