<template>
  <!-- eslint-disable -->
  <a-layout id="app">
    <side-menu :collapsed.sync="collapsed"></side-menu>
    <a-layout id="app-main">
      <global-header @toggle="changeCollapse"></global-header>
      <a-layout-content style="min-height: auto">
        <router-view />
      </a-layout-content>
      <global-footer></global-footer>
    </a-layout>
  </a-layout>
  <!-- eslint-enable -->
</template>
<script>
import GlobalHeader from '@/components/global/GlobalHeader.vue'
import GlobalFooter from '@/components/global/GlobalFooter'
import SideMenu from '@/components/global/SideMenu.vue'
export default {
  components: { GlobalHeader, GlobalFooter, SideMenu},
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    changeCollapse() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>
<style lang="less">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>

