export default [
  {
    path: '/tarefas',
    name: 'Tarefas',
    component: () => import(/* webpackChunkName: "tarefas" */ './index.vue')
  }
]
