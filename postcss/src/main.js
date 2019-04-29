// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Table, TableColumn, Button, ButtonGroup} from 'element-ui'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)//安装插件
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
