<template>
  <a-locale-provider :locale="zh_CN">
    <div id="app">
      <router-view />
    </div>
  </a-locale-provider>
</template>
<style lang="less">
/* 滚动槽 */
::-webkit-scrollbar {
  width: 6px;
  height: 4px;
}
::-webkit-scrollbar-track {
  border-radius: 3px;
  background: transparent;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.06);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  name: 'app',
  data() {
    return {
      zh_CN
    }
  },
  created() {
    // 初始化 VUEX数据
    this.$store.dispatch('getScoreType')
    this.$store.dispatch('getActivityType')
  }
}
</script>
