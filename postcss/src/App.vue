<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="testPx">
      嘿嘿嘿嘿嘿嘿嘿嘿或或
    </div>
    <router-view/>
  </div>
</template>

<script>document.getElementsByTagName('html')[0].style.fontSize = (document.documentElement.clientWidth ||  document.body.clientWidth) /10 + 'px';</script>
<script>
import '@/assets/css/reset.css'
export default {
  name: 'App'
}
</script>

<style>
.testPx{
  font-size:16px;
}
</style>
