<template>
  <div>{{attrs}}</div>
</template>

<script>
export default {
    props: {
      width: {
        type: String,
        default: ''
      }
    },
  mounted() {
    console.log(this)
    console.log(this.$attrs) //{title: "这是标题", width: "80", height: "80", imgUrl: "imgUrl"}
    console.log(this.$listeners.change()) // 子组件需要调用父组件的方法解决  -->> 可以一直传递下去  -->>或许可以监听
  },
  data() {
    return {
      attrs: this.$attrs
    }
  },
/* 
  如果你不希望组件的根元素继承特性
  这尤其适合配合实例的 $attrs 属性使用，该属性包含了传递给一个组件的特性名和特性值，例如：
  {
    required: true,
    placeholder: 'Enter your username'
  }

  Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    template: `
      <label>
        {{ label }}
        <input
          v-bind="$attrs"
          v-bind:value="value"
          v-on:input="$emit('input', $event.target.value)"
        >
      </label>
    `
  })
*/
  // inheritAttrs: false

}
// 相对应的如果子组件定义了 props,打印的值就是剔除定义的属性
</script>

<style>

</style>