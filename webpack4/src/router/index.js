import Vue from 'vue'
import Router from 'vue-router'
import constantRouterMap from './routes'
Vue.use(Router)
export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
