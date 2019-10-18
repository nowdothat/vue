export default [
  { path: '', name: 'login', component: () => import('@/views/layout.vue')},
  { path: '/async_component', name: 'async_component', component: () => import('@/views/async_component')},
  { path: '/listeners', name: 'listeners', component: () => import('@/views/listeners_attrs')},
  { path: '/provide', name: 'provide', component: () => import('@/views/provide_inject')},
]