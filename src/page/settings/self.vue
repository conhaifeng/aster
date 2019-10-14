<template>
  <el-form
    :model="userInfo"
    ref="userInfo"
    :rules="rules"
    label-width="80px"
    label-position="right"
  >
    <el-form-item label="头像">
      <el-upload
        action="http://10.100.108.23:8080/avatar"
        :multiple="false"
        :show-file-list="false"
        :before-upload="fileValidator"
        class="avatarUploader"
      >
        <el-avatar :size="50" :src="defaultAvatar"></el-avatar>
        <div slot="tip" class="el-upload__tip">只能上传ipg/png文件，大小不能超过2M</div>
      </el-upload>
    </el-form-item>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="userInfo.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="userInfo.email" placeholder="请输入邮箱"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio label="male" v-model="userInfo.gender">男</el-radio>
      <el-radio label="female" v-model="userInfo.gender">女</el-radio>
    </el-form-item>
    <el-form-item label="居住地址">
      <aster-address :value.sync="userInfo.address"></aster-address>
    </el-form-item>
    <el-form-item label="个人网站">
      <el-input v-model="userInfo.website"></el-input>
    </el-form-item>
    <el-form-item label="生日">
      <el-date-picker v-model="userInfo.birthday"></el-date-picker>
    </el-form-item>
    <el-form-item label="公司">
      <el-input v-model="userInfo.company"></el-input>
    </el-form-item>
    <el-form-item label="兴趣">
      <el-checkbox-group v-model="userInfo.interests" :max="3">
        <el-checkbox
          v-for="(interest, index) in interests"
          :key="index"
          :label="interest.value"
        >{{interest.name}}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="自我介绍">
      <el-input type="textarea" v-model="userInfo.description"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" plain @click="submit('userInfo')">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import address from "@/components/address";
export default {
  data: function() {
    return {
      defaultAvatar:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      userInfo: {
        username: "running man",
        email: "conhaifeng@163.com",
        gender: "male",
        address: "nanjing",
        website: "www.haifeng.com",
        birthday: "1990-01-23",
        company: "甲骨文",
        description: "",
        interests: ["computer", "read"]
      },
      interests: [
        { name: "计算机", value: "computer" },
        { name: "篮球", value: "basketball" },
        { name: "音乐", value: "music" },
        { name: "电影", value: "movie" },
        { name: "读书", value: "read" },
        { name: "厨艺", value: "cook" }
      ],
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: ["blur", "change"]
          },
          { min: 5, max: 20, message: "用户名需介于5-20个字", trigger: "blur" }
        ],
        email: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: ["blur", "change"]
          },
          { type: "email", message: "请输入正确的邮箱格式", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    fileValidator: function(file) {
      let acceptType = file.type === "image/jpeg" || file.type === "image/png";
      let size = file.size / 1024 / 1024;
      let acceptSize = size < 2;

      if (!acceptType) {
        this.$message({
          type: "error",
          message: "只支持png/jpg格式",
          center: true,
          duration: 2000
        });

        return acceptType;
      }

      if (!acceptSize) {
        this.$message({
          type: "error",
          message: "不能超过2M",
          center: true,
          duration: 2000
        });

        return acceptSize;
      }
    },
    submit: function(formName) {
      this.$refs[formName].validate(validate => {
        if (!validate) {
          return false;
        }

        this.$message({
          message: "提交成功",
          type: "success",
          center: true,
          offset: 150,
          duration: 2000
        });
      });
    }
  },
  components: {
    "aster-address": address
  }
};
</script>

<style scoped>
.avatarUploader {
  line-height: normal;
}

.el-form {
  width: 400px;
  margin: 0 auto;
}

.el-input {
  width: 250px;
}

.el-textarea {
  width: 250px;
}

.el-cascader {
  width: 250px;
}
</style>
