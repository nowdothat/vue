<template>
  <a-layout-sider class="side-menu" breakpoint="lg" width="256px" collapsedWidth="80" :theme="theme" :collapsed="collapsed" @collapse="onCollapse" @breakpoint="onBreakpoint">
    <div class="logo">
      <img class="mark" src="../../assets/logo.svg" />
      <h1 v-show="!collapsed" :class="[theme === 'dark' ? 'dark-title' : 'light-title']">Activity Management</h1>
    </div>
    <router-menu :menus="menuConfig" :theme="theme" :inlineCollapsed="collapsed"></router-menu>
  </a-layout-sider>
</template>
<style lang="less">
.side-menu {
  position: relative;
  box-shadow: 0 2px 6px rgba(#000, 0.4);
  z-index: 1200;
  .logo {
    @height: 64px;
    height: @height;
    padding-left: 22px;
    line-height: @height;
    background-color: #002140;
    overflow: hidden;
  }
  .mark {
    width: 32px;
    height: 32px;
  }
  .dark-title {
    display: inline-block;
    margin: 0 0 0 10px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    vertical-align: middle;
    transition: all 0.5s ease;
  }
  .light-title {
    &:extend(.dark-title);
    color: #000;
  }
}
</style>
<script>
import menus from '@/router/menus'
import RouterMenu from '@/components/units/RouterMenu.js'
export default {
  name: 'SideMenu',
  components: { RouterMenu },
  props: {
    theme: {
      type: String,
      default: 'dark'
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      innerCollapsed: this.collapsed
    }
  },
  created() {
    this.menuConfig = this.getMenuConfig(menus)
  },
  methods: {
    getMenuConfig(data) {
      return (function fn(routerList, level = [0]) {
        return routerList.reduce((list, router) => {
          const {meta} = router
          if(meta.hiddenMenu) return list
          let _item = {
            name: meta.title
          }
          if(meta.menuIcon) {
            _item.icon = meta.menuIcon
          }
          if(router.children && !meta.hiddenChildren) {
            level[level.length -1] ++;
            _item.key = `sub${level}`
            _item.subs = fn(router.children, [...level, 0])
          }else {
            _item.direct = router.path
            _item.key = router.path
          }
          return list.concat(_item)
        }, [])
      })(data)
    },
    onCollapse(collapsed, type) {
    },
    onBreakpoint(collapsed) {
      this.$emit('update:collapsed', collapsed)
    }
  }
}
</script>
