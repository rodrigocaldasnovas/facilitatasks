import store from '../store'

export default (to, from, next) => {
  document.title = `${to.name} - FacilitaTasks`
  if (to.name !== 'login' && !store.getters.hasToken) {
    store.dispatch('ActionCheckToken')
    next()
  } else {
    if (to.name === 'login' && store.getters.hasToken) {
      next({ name: 'home' })
    } else {
      next()
    }
  }
}
