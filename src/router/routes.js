import { routes as login } from '../modules/login'
import { routes as dashboard } from '../modules/Dashboard'
import { routes as configuracoes } from '../modules/Configuracoes'
import { routes as tarefas } from '../modules/Tarefas'

export default [
  { path: '/', redirect: '/dashboard' },
  ...login,
  ...dashboard,
  ...configuracoes,
  ...tarefas
]
