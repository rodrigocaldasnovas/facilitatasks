import store from '../store'

export default (to, from, next) => {
  document.title = `${to.name} - FacilitaTasks`
  if (to.name !== 'Login' && !store.getters.hasToken) {
    next({ name: 'Login' })
  } else {
    if (to.name === 'Login' && store.getters.hasToken) {
      next({ name: 'Dashboard' })
    } else {
      next()
    }
  }
}
