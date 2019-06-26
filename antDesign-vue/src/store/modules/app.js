const app = {
  state: {
    test: ''
  },
  mutations: {
    testDelete(state, info) {
      state.test = info
    }
  },
  actions: {}
}

export default app