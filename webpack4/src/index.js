import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
