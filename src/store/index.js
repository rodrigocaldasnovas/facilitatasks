import Vue from 'vue'
import Vuex from 'vuex'
import * as storage from '../modules/login/storage'

Vue.use(Vuex)

const user = {
  logged: false,
  name: 'Eduardo Pereira da Costa',
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
