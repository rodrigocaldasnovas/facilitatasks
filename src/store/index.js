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
      state.token = payload
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    ActionCheckToken ({ dispatch, state }) {
      if (state.token) {
        return Promise.resolve(state.token)
      }
      const token = storage.getLocalToken()
      if (!token) {
        return Promise.reject(new Error('Token Invalid'))
      }
      dispatch('ActionSetToken', token)
      return dispatch('ActionLoadSession')
    },
    ActionSetToken (context, payload) {
      storage.setLocalToken(payload)
      context.commit('setToken', payload)
    },
    ActionSetUser (context, payload) {
      context.commit('setUser', payload)
    },
    ActionLoadSession ({ dispatch }) {
      return new Promise((resolve, reject) => {
        const token = storage.getLocalToken()
        if (token) {
          dispatch('ActionSetUser', user)
          resolve()
        } else {
          dispatch('ActionLogout')
          reject(Error)
        }
      })
    },
    ActionLogout ({ dispatch }) {
      dispatch('ActionSetUser', {})
      dispatch('ActionSetToken', '')
    }
  },
  modules: {
  }
})
