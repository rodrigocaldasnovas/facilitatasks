export default [
  {
    path: '/configuracoes',
    name: 'Configuracoes',
    component: () => import(/* webpackChunkName: "configuracoes" */ './index.vue')
  }
]
