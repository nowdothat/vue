<template>
  <div>
    <div>异步路由切换</div>
    <button @click="toggle('AsyncComponent')">AsyncComponent</button>
    <button @click="toggle('TwoAsyncComponent')">TwoAsyncComponent</button>
    <component v-bind:is="currentTabComponent"></component>
  </div>
</template>

<script>
  const AsyncComponent = () => ({
    // 需要加载的组件 (应该是一个 `Promise` 对象)
    component: import('./modules/asyncCom.vue'),
    // 异步组件加载时使用的组件
    // loading: LoadingComponent,
    // 加载失败时使用的组件
    // error: ErrorComponent,
    // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    delay: 200,
    // 如果提供了超时时间且组件加载也超时了，
    // 则使用加载失败时使用的组件。默认值是：`Infinity`
    // timeout: 3000
  })

  export default {
    components: {
      AsyncComponent, // webpack es高级特性
      TwoAsyncComponent: () => import('./modules/twoAsyncCom.vue')
    },
    data () {
      return {
        currentTabComponent: 'AsyncComponent'
      }
    },
    methods: {
      toggle(e) {
        this.currentTabComponent = e
      }
    }
  }
</script>