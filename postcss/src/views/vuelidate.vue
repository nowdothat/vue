<template>
 <div>
   <div :class="{ 'form-group--error': $v.user.password.$error }" >
    <input v-model.trim="$v.user.password.$model" 
           @blur="$v.user.password.$touch()" class="input-line" 
           type="password"  
           placeholder="请设置密码">
    <span class="form-group__message" v-if="!$v.user.password.required">密码不能为空</span>
</div>
<div :class="{ 'form-group--error': $v.user.confirmPassword.$error }">
    <input v-model.trim="$v.user.confirmPassword.$model" 
           class="input-line" type="password" 
           placeholder="请确认密码">
    <span class="form-group__message" 
          v-if="!$v.user.confirmPassword.sameAsPassword">两次输入的密码不一致</span>
</div>
<div :class="{ 'form-group--error': $v.user.phone.$error }">
    <input v-model.trim="$v.user.phone.$model" 
           @blur="$v.user.phone.$touch()" class="input-line" 
           placeholder="请输入手机号码">
    <span class="form-group__message" v-if="!$v.user.phone.required">手机号码不能为空</span>
    <span class="form-group__message" v-if="!$v.user.phone.phone">请输入正确的手机号码</span>
</div>
 </div>
</template>

<script>
import { required, maxLength, sameAs } from 'vuelidate/lib/validators'
import { regex } from 'vuelidate/lib/validators/common'
var phone = regex('phoneNumber', /^1(3|4|5|7|8)\d{9}$/) // 手机号码校验

export default {
    data () {
        return {
            user: {
                username: '',
                password: '',
                confirmPassword: '',
                phone: '',
                phoneCode: ''
            }
        }
    },
    // 2.定义验证字段的规则
    validations: {
        user: {
            username: {
                required,
                // minLength: minLength(2),
                maxLength: maxLength(20),
                async isUnique (value) { // 异步校验用户名是否已注册
                    if (value === '') return true
                    const response = await fetch(`/api/unique/name/${value}`)
                    return Boolean(await response.json())
                }
            },
            password: {
                required
            },
            confirmPassword: {
                sameAsPassword: sameAs('password') // 校验密码是否一致
            },
            phone: {
                required,
                phone  // 直接就是用的上面const设置的校验规则，自定义校验
            },
            phoneCode: {
                required
            }
        }
    }
}

</script>
<style scoped>
.form-group__message{
    display: none;
    font-size: 12px;
    color: #CC3333;
}
.form-group--error > input + .form-group__message {
    display: block;
    color: #CC3333;
}
.form-group--error input, .form-group--error input:focus, .form-group--error input:hover, .form-group--error textarea {
    border-color: #CC3333;
}
</style>