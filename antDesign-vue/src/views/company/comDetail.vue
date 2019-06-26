<template>
  <div>
    我们的技术服务如何:
    <a-rate v-model='value'/>
    <button @click="test">点击测试mapState</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      value: 2
    }
  },
  //以下两种方法的效果是一致的
  // computed: mapState(['app']),
  computed: mapState({
    appTwo: state => state.app
  }),
  methods: {
    test() {
      this.$store.commit('testDelete','test');
      console.log(this.appTwo.test,'-===->>>')
    }
  }
}
</script>
