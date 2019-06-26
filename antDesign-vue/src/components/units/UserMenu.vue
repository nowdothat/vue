<script>
export default {
  name: 'UserMenu',
  methods: {
    handleLogout() {
      console.log('==> logout');
    }
  },
  render() {
    return (
      <div class="user-menu">
        <a-dropdown>
          <span class="user-menu__dropdown trigger">
            <a-avatar class="avatar" size="small" src="" /> &nbsp;
            <span>nickname</span>
          </span>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <router-link to={{ name: 'center' }}>
                <a-icon type="user" /> &nbsp;
                <span>个人中心</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="1">
              <router-link to={{ name: 'settings' }}>
                <a-icon type="setting" /> &nbsp;
                <span>账户设置</span>
              </router-link>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3">
              <a href="javascript:;" onClick={this.handleLogout}>
                <a-icon type="logout" /> &nbsp;
                <span>退出登录</span>
              </a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    );
  }
};
</script>
<style lang="less" scoped>
.user-menu {
  position: relative;
  float: right;
  margin: 0 15px 0 0;
  color: #000;
}
</style>
