import { getInfo } from '@/api/login';
const user = {
  state: {
    welcome: '',
    avatar: '',
    info: {},
    roles: []
  },
  mutations: {
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },
  actions: {
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          const result = response.result
          if(result.role && result.role.permissions.length > 0) {
            const role = result.role
            role.permissions = result.role.permissions
            role.permissions.map(per => {
              if(per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                const action = per.actionEntitySet.map(action => {return action.action})
                per.actionList = action
              }
            })
            role.permissionList = role.permissions.map(permission => {return permission.permissionId})
            // 这一步的作用就是用于触发一次
            commit('SET_ROLES', result.role)
            commit('SET_INFO', result)
          } else {
            reject(new Error('roles must be a array'))
          }

          commit('SET_NAME', {name: result.name, welcome: welcome()})
          commit('SET_AVATAR', result,avatar)

          resolve(response)

        }).catch(error => {
          reject(error)
        })
      })
    }
  }
};
