// import store from '../store'

export default (to, from, next) => {
  document.title = `${to.name} - FacilitaTasks`
  next()
  // if (to.name !== 'login' && !store.getters.hasToken) {
  //   next({ name: 'Login' })
  // } else {
  //   if (to.name === 'login' && store.getters.hasToken) {
  //     next({ name: 'Dashboard' })
  //   } else {
  //     next()
  //   }
  // }
}
