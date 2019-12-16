<template>
  <div class="login-container">
    <el-form :model="accountInfo"
             :rules="accountInfoRules"
             label-position="left"
             ref="loginForm"
             class="login-form">
      <h2 class="title">系统登录</h2>
      <el-form-item prop="username">
        <el-input v-model="accountInfo.username"
                  placeholder="请输入用户名"
                  prefix-icon="el-icon-user-solid" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="accountInfo.password"
                  placeholder="请输入密码"
                  show-password
                  prefix-icon="el-icon-unlock" />
      </el-form-item>
      <el-form-item class="submit-button">
        <el-button type="primary"
                   class="login-button"
                   @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>

import { login } from '@/api/user';

export default {
  data: function () {
    return {
      accountInfo: {
        username: "",
        password: ""
      },
      accountInfoRules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 5, max: 20, message: '用户名长度在5-20个字符之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    login: function () {
      this.$refs.loginForm.validate(validate => {

        if (!validate) {
          return false
        }

        this.$store.dispatch('user/login', this.accountInfo)
          .then(() => {
            this.$router.push('/index')
          })
          .catch(error => {
            this.$msg('error', error)
          })
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
$bg = #a9c3e4;
.login-container {
  height: 100%;
  background-color: $bg;
}
.login-form {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 250px;
  height: 300px;
  margin: auto;
  text-align: center;
}
</style>
