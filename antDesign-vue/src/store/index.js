import Vue from 'vue'
import Vuex from 'vuex'

const modContext = require.context('./modules', false, /\.js$/)
Vue.use(Vuex)

export default new Vuex.Store({
  modules: modContext.keys().reduce((result, mod) => {
    if (mod.startsWith('./index')) return
    const value = modContext(mod)
    const key = mod.split(/\.\/(\w+)\.js$/)[1]
    result[key] = value.default || value
    return result
  }, {}),
  state: {},
  mutations: {},
  actions: {}
})