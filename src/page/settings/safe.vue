<template>
  <el-collapse accordion>
    <el-collapse-item name="modifyPassword">
      <template slot="title">
        <h3>修改密码</h3>
      </template>
      <el-form :model="passwordInfo"
               :rules="rules"
               ref="passwordForm"
               label-width="130px"
               label-position="right">
        <el-form-item label="旧密码"
                      prop="oldPassword">
          <el-input v-model="passwordInfo.oldPassword"
                    placeholder="请输入旧密码"></el-input>
        </el-form-item>
        <el-form-item label="新密码"
                      prop="newPassword">
          <el-input v-model="passwordInfo.newPassword"
                    placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-form-item label="再次输入密码"
                      prop="newPasswordAG">
          <el-input v-model="passwordInfo.newPasswordAG"
                    placeholder="请再次输入新密码"></el-input>
        </el-form-item>
        <div class="submit-button">
          <el-button type="primary"
                     @click="save">提交</el-button>
          <el-button @click="reset">重置</el-button>
        </div>
      </el-form>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
import { changePassword } from '@/api/user'
import { Message } from 'element-ui'

export default {
  data: function () {
    var passwordEqual = (rule, value, callback) => {
      if (value !== this.passwordInfo.newPassword) {
        callback(new Error("密码不一致"));
      }
      callback();
    };
    return {
      passwordInfo: {
        oldPassword: "",
        newPassword: "",
        newPasswordAG: ""
      },
      rules: {
        oldPassword: [
          {
            required: true,
            message: "密码不能为空",
            trigger: ["blur", "change"]
          }
        ],
        newPassword: [
          {
            required: true,
            message: "密码不能为空",
            trigger: ["blur", "change"]
          }
        ],
        newPasswordAG: [
          {
            required: true,
            message: "密码不能为空",
            trigger: ["blur", "change"]
          },
          { validator: passwordEqual, trigger: ["blur"] }
        ]
      }
    };
  },
  methods: {
    save: function () {
      this.$refs.passwordForm.validate(validate => {
        if (!validate) {
          return false;
        }

        changePassword(this.passwordInfo).then(resp => {
          let data = resp.data
          if (data.code === "0000") {
            this.$msg('success', '提交成功')
            this.reset()
          } else {
            this.$msg('error', data.message)
          }
        }).catch(error => {
          this.$msg('error', '修改失败')
        })

      });
    },
    reset: function () {
      this.$refs.passwordForm.resetFields();
    }
  }
};
</script>

<style scoped>
.el-input {
  width: 250px;
}

.el-collapse {
  width: 500px;
  margin: 0 auto;
}
</style>
