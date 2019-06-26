<template>
  <div class="view-wrapper">
    <div class="login-header">
      <!-- <img class="logo" src="../assets/logo.png" alt="logo" /> -->
      <span class="title">Activity Management System</span>
      <p class="desc">some thing</p>
    </div>
    <slot></slot>
    <div class="login-footer">
      <div class="links">
        <a v-for="(item, index) in links" :key="index" :href="item.url">{{
          item.text
        }}</a>
      </div>
      <div class="copyright">
        Copyright © 2019 some thing
      </div>
    </div>
  </div>
</template>
<style lang="less">
.login-header {
  text-align: center;
  > .logo {
    width: 68px;
    margin-right: 20px;
  }
  > .title {
    position: relative;
    top: 6px;
    font-size: 32px;
    font-weight: bold;
  }
  > .desc {
    margin: 16px 0 32px;
    color: #999;
  }
}
.login-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 16px;
  margin: 40px 0 20px;
  text-align: center;
  > .links {
    margin-bottom: 10px;
    a {
      padding: 20px;
    }
  }
}
</style>
<script>
export default {
  name: "LoginLayout",
  props: {},
  data() {
    return {
      // links: [{ text: '帮助', url: '/' }, { text: '用户中心', url: '/' }, { text: '条款', url: '/' }]
      links: []
    };
  },
  methods: {}
};
</script>
