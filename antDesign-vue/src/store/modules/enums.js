import { GET_PRODUCT_TYPE, GET_SCORE_TYPE, GET_ACTIVITY_TYPE } from '../mutation-types'
// import { $http } from '@/request'
// const requestEnums = (api, commit) =>
//   $http(api).then(res => {
//     if(res.data.retCode !== 'success') console.error(`请求${api}失败`)
//     let result = res.data.result.map(item => ({text: item.name, value: item.key}))
//     commit(api, result)
//   })

const enums = {
  state: {
  },
  mutations: {
    [GET_PRODUCT_TYPE]: (state, payload) => {
      state.productType = payload
    },
    [GET_SCORE_TYPE]: (state, payload) => {
      state.scoreType = payload
    },
    [GET_ACTIVITY_TYPE]: (state, payload) => {
      state.activityType = payload
    }
  },

  actions: {
    getProductType({ commit }) {
      // return requestEnums('GET_PRODUCT_TYPE', commit)
    },
    getScoreType({ commit }) {
      // return requestEnums('GET_SCORE_TYPE', commit)
    },
    getActivityType({ commit }) {
      // return requestEnums('GET_ACTIVITY_TYPE', commit)
    }
  }
}

export default enums