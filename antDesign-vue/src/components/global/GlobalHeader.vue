<script>
import UserMenu from '@/components/units/UserMenu.vue'
export default {
  name: 'GlobalHeader',
  components: {UserMenu},
  props: {
    collapsed: Boolean
  },
  methods: {
    toggleHandle() {
      this.$emit('toggle')
    }
  },
  render() {
    let {collapsed, toggleHandle} = this
    return (
      <transition name="showHeader">
        <a-layout-header class="global-header" style="background-color: #fff;">
          <a-icon class="trigger icon-trigger" type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggleHandle} />
          <user-menu />
        </a-layout-header>
      </transition>
    )
  }
}
</script>
<style lang="less" scoped>
.global-header {
  @hoverBg: #f9f9f9;
  position: relative;
  padding: 0 0px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(#000, 0.1);
  z-index: 2;
  .icon-trigger {
    font-size: 20px;
    line-height: 3.2;
    vertical-align: top;
  }
  .trigger {
    display: inline-block;
    height: 100%;
    padding: 0 15px;
    cursor: pointer;
    &:hover {
      background-color: @hoverBg;
    }
  }
}
.showHeader-enter-active {
  transition: all 0.25s ease;
}
.showHeader-leave-active {
  transition: all 0.5s ease;
}
.showHeader-enter,
.showHeader-leave-to {
  opacity: 0;
}
</style>

