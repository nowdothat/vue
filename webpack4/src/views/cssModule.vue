<template>
  <div>
    <div :class="$style.red">这是excel页面</div>
    <div :class="{[$style.skyBule] : isTrue}">这是excel页面</div>
    <div :class="[$style.skyBule, $style.bold]">这是excel页面</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isTrue: true
    }
  },
  mounted() {
    console.log(this.$style.skyBule) //cssModule_skyBule_1gxbL
  }
}
</script>

<style module>
.red {
  color: red;
}
.skyBule{
  color:skyblue;
}
.bold{
  font-weight: bold;
  display: flex; justify-content: flex-end;transform: translateX(50%)
}
</style>


