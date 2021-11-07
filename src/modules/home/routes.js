export default [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ './index.vue')
  }
]
