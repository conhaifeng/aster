<template>
  <el-form
    :model="userInfo"
    ref="userInfo"
    :rules="rules"
    label-width="80px"
    label-position="right"
    @submit.native.prevent
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
      <el-cascader :options="addresses" v-model="userInfo.address"></el-cascader>
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
    <el-form-item label="自我介绍">
      <el-input type="textarea" v-model="userInfo.description"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" plain @click="submit('userInfo')">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
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
        description: ""
      },
      addresses: [
        {
          value: "hebei",
          label: "河北",
          children: [
            {
              value: "shijiazhuang",
              label: "石家庄"
            },
            {
              value: "baoding",
              label: "保定"
            },
            {
              value: "tangshan",
              label: "唐山"
            },
            {
              value: "xingtai",
              label: "邢台"
            },
            {
              value: "langfang",
              label: "廊坊"
            }
          ]
        },
        {
          value: "jiangsu",
          label: "江苏",
          children: [
            {
              value: "nanjing",
              label: "南京"
            },
            {
              value: "suzhou",
              label: "苏州"
            },
            {
              value: "wuxi",
              label: "无锡"
            },
            {
              value: "changzhou",
              label: "常州"
            },
            {
              value: "xuzhou",
              label: "徐州"
            }
          ]
        },
        {
          value: "shandong",
          label: "山东",
          children: [
            {
              value: "jinan",
              label: "济南"
            },
            {
              value: "qingdao",
              label: "青岛"
            },
            {
              value: "yantai",
              label: "烟台"
            },
            {
              value: "heze",
              label: "菏泽"
            }
          ]
        },
        {
          value: "xinjiang",
          label: "新疆",
          children: [
            {
              value: "wulumuqi",
              label: "乌鲁木齐"
            },
            {
              value: "hami",
              label: "哈密"
            },
            {
              value: "tulufan",
              label: "吐鲁番"
            }
          ]
        },
        {
          value: "henan",
          label: "河南",
          children: [
            {
              value: "zhengzhou",
              label: "郑州"
            },
            {
              value: "luoyang",
              label: "洛阳"
            },
            {
              value: "kaifeng",
              label: "开封"
            },
            {
              value: "xuchang",
              label: "许昌"
            }
          ]
        }
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
      this.$refs[formName].validate((validate) => {
       
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
