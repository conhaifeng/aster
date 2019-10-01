<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="8" class="label-style">
        <el-avatar :size="50" :src="defaultAvatar"></el-avatar>
      </el-col>
      <el-col :span="8">
        <el-upload
          action="http://10.100.108.23:8080/avatar"
          :multiple="false"
          :before-upload="fileValidator"
          class="avatar-style"
          :show-file-list="false"
        >
          <el-button type="primary" size="small">更改头像</el-button>
        </el-upload>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8" class="label-style">
        <span>用户名</span>
      </el-col>
      <el-col :span="8">
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8" class="label-style">
        <span>邮箱</span>
      </el-col>
      <el-col :span="8">
        <el-input v-model="email" placeholder="请输入邮箱"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8" class="label-style">
        <span>性别</span>
      </el-col>
      <el-col :span="8">
        <el-radio v-model="gender" label="male">男</el-radio>
        <el-radio v-model="gender" label="female">女</el-radio>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8" class="label-style">
        <span>现居地址</span>
      </el-col>
      <el-col :span="8">
        <el-cascader v-model="address" :options="addressOptions"></el-cascader>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8" class="label-style">
        <span>个人网站</span>
      </el-col>
      <el-col :span="8">
        <el-input v-model="website" placeholder="请输入个人网站"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8" class="label-style">
        <span>生日</span>
      </el-col>
      <el-col :span="8">
        <el-date-picker v-model="birthday" placeholder="请输入生日"></el-date-picker>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8" class="label-style">
        <span>公司</span>
      </el-col>
      <el-col :span="8">
        <el-input v-model="company"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8" class="label-style">
        <span>自我介绍</span>
      </el-col>
      <el-col :span="8">
        <el-input type="textarea" v-model="description"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="8">
        <div class="save-align">
          <el-button type="primary" plain @click="save">保存</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultAvatar:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      username: "running man",
      email: "conhaieng@163.com",
      gender: "male",
      website: "www.haifeng.com",
      birthday: "1990-01-23",
      address: "nanjing",
      company: "火箭军",
      description: "",
      addressOptions: [
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
      ]
    };
  },
  methods: {
    fileValidator: function(file) {
      let acceptType = file.type === "image/jpeg";
      let size = file.size / 1024 / 1024;
      let acceptSize = size < 2;

      if (!acceptType) {
        this.$message({
          type: "error",
          message: "只支持png/jpg格式",
          center: true
        });

        return acceptType;
      }

      if (!acceptSize) {
        this.$message({
          type: "error",
          message: "不能超过2M",
          center: true
        });

        return acceptSize;
      }
    },
    save: function() {
      let is_username_empty = this.username === null || this.username === "";
      let is_email_empty = this.email === null || this.email === "";
      if (is_username_empty) {
        this.$message({
          message: "用户名不能为空",
          type: "error",
          offet: 150,
          duration: 2000
        });

        return false;
      }

      if (is_email_empty) {
        this.$message({
          message: "邮箱不能为空",
          type: "error",
          offet: 150,
          duration: 2000
        });

        return false;
      }

      this.$message({
        message: "保存成功",
        type: "success",
        offset: 150
      });
    }
  }
};
</script>

<style>

.avatar-style {
  line-height: 50px;
}

.el-row {
  margin-bottom: 20px;
}

.el-avatar {
  vertical-align: middle;
}

.el-input {
  width: 250px;
}

.label-style {
  text-align: center;
  line-height: 40px;
  font-size: 14px;  
}

.el-textarea {
  width: 250px;
}

.grid-content {
  min-height: 36px;
}

.save-align {
  padding-left: 5px;
}
</style>
