import { BasicLayout } from '@/layouts'
import routersMenus from './menus'
export default [
  {
    path: '/',
    name: 'home',
    component: BasicLayout,
    redirect: '/workplace',
    meta: { title: '首页' },
    children: routersMenus
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/user/Login.vue')
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  },
  {
    path: '*',
    redirect: '404'
  }
]
