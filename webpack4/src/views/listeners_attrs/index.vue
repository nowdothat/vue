<template>
  <div>
    <attrsComponent title="这是标题" width="80" height="80" imgUrl="imgUrl" @change="change" />
  </div>
</template>

<script>
export default {
  name: 'parentCon_listeners_attrs',
  components: {
    attrsComponent: () => import('./attrs_com.vue')
  },
  methods: {
    change() { // webpack 特性
      console.log('---this is parent')
    }
  }
}
</script>

<style>

</style>