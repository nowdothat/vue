export default [
  { path: '', name: 'login', component: () => import('@/views/layout.vue')},
  { path: '/async_component', name: 'async_component', component: () => import('@/views/async_component')},
  { path: '/listeners', name: 'listeners', component: () => import('@/views/listeners_attrs')},
  { path: '/provide', name: 'provide', component: () => import('@/views/provide_inject')},
  { path: '/function_component', name: 'function_component', component: () => import('@/views/functionComponent/index')},
  { path: '/dynamicForm', name: 'dynamicForm', component: () => import('@/views/dynamicForm/index')},
]