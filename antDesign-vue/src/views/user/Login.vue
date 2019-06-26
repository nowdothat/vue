<template>
  <login-layout>
    <div class="main">
      <a-form class="login-form" :form="form" @submit="handleSubmit">
        <a-form-item>
          <a-input
            placeholder="用户名"
            size="large"
            type="text"
            v-decorator="['username', { rules: [{ required: true, message: '请输入用户名' }, { validator: handleTestUsername }], validateTrigger: 'change', validateFirst: true }]"
          >
            <a-icon slot="prefix" type="user" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input placeholder="密码" size="large" type="password" v-decorator="['password', { rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'change' }]">
            <a-icon slot="prefix" type="lock" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" size="large" html-type="submit" block style="margin-top: 16px;" :loading="stateLoading" :disabled="stateLoading">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </login-layout>
</template>
<style lang="less">
.login-wrapper .main {
  max-width: 400px;
  margin: 0 auto;
  padding: 60px 16px 0 16px;
}
</style>
<script>
import LoginLayout from '@/layouts/LoginLayout.vue'
import { setTimeout } from 'timers'
export default {
  name: 'Login',
  components: { LoginLayout },
  props: {},
  data() {
    this.form = this.$form.createForm(this)
    return {
      stateLoading: false
    }
  },
  methods: {
    handleTestUsername(rule, value, callback) {
      const regex = /^[a-zA-Z0-9_-]{1,16}$/
      if (!regex.test(value)) {
        callback('用户名由数字、字母、-和下划线组成的字符')
      }
      callback()
    },
    handleSubmit(e) {
      e.preventDefault()
      const {
        form: { validateFields }
      } = this
      validateFields(['username', 'password'], { force: true }, (err, values) => {
        console.log(err, values)
        if (err) return
        this.stateLoading = true
        setTimeout(() => {
          this.stateLoading = false
        }, 1200)
      })
    }
  }
}
</script>
