import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import { vueHttp } from '@/request'
import './plugins/ant-design-vue.js'

Vue.config.productionTip = false
Vue.use(vueHttp)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')