<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div @click="targetExcel" class="testPx">
      嘿嘿嘿嘿嘿嘿嘿嘿或或
    </div>
    <div class="pre">测试前缀
      <div>我是子元素</div>
    </div>
    <router-view/>
  </div>
</template>

<script>document.getElementsByTagName('html')[0].style.fontSize = (document.documentElement.clientWidth ||  document.body.clientWidth) /10 + 'px';</script>
<script>
import '@/assets/css/reset.css'
import '@/assets/css/common.css'
export default {
  name: 'App',
  methods: {
    targetExcel() {
      this.$router.push('/excel')
    }
  }
}
</script>

<style>
.testPx{
  font-size:16px;
}
</style>
