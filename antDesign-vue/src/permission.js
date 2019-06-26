import Vue from 'vue'
import router from './router'
import store from './store'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import notification from 'ant-design-vue/es/notification'
import { setDocumentTitle, domTitle } from '@/utils/domUtil'
import { ACCESS_TOKEN } from '@/store/mutation-types'

NProgress.configure({ showSpinner: false })

const whiteList = ['login', 'register', 'registerResult']

router.beforeEach((to, from, next) => {
  NProgress.start()
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title} - ${domTitle}`))
  if(Vue.ls.get(ACCESS_TOKEN)) {
    // 这里使用了Vue-ls插件
    if(to.path === '/user/login') {
      next({ path: '/dashboard/workplace'})
      NProgress.done()
    } else {
      if (store.getters.roles.length  === 0) {
        // 目标只会执行一次
        store.dispatch('GetInfo').then(res => {
          // 将权限信息存储在vuex的user里面，然后resolve回这里
          const roles = res.result && res.result.role
          // 生成路由表
          store.dispatch('GenerateRoutes', { roles }).then(() => {
            // 拿取上一步SET_ROUTERS生成的路由表
            router.addRoutes(store.getters.addRoutes)
            const reditect = decodeURIComponent(from.query.reditect || to.path)
            if(to.path === reditect) {
              // hack方法
              next({...to, replace: true})
            }else {
              next({path:reditect})
            }
          })
        })
        .catch(() => {
          notification.error({
            message: '错误',
            description: '请求用户信息失败，请重试'
          })
          store.dispatch('Logout').then(() => {
            next({ path: '/user/login', query: { redirect: to.fullPath } })
          })
        })
      }else {
        next()
      }
    }
  }else {
    if(whiteList.includes(to.name)) {
      next() 
    }else {
      next({path: '/user/login', query: {redireact: to.fullPath}})
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
/**
 * 主要修改了
 * antDesign-vue/src/store/modules/user.js
 * antDesign-vue/src/store/modules/permission.js
 * antDesign-vue/src/store/getters.js
 * antDesign-vue/src/request/log.js
 * antDesign-vue/src/request/index.js
 * antDesign-vue/src/request/fetch.js
 * antDesign-vue/src/permission.js
 * antDesign-vue/src/api/index.js
 */