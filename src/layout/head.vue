<template>
  <div class='aster-head'>
    <div class="aster-logo">
      <img :src="image"
           class="logo-image" />
      <span class="">Aster</span>
    </div>
    <div>
      <ul class="userinfo">
        <li class="userinfo-item">Welcome</li>
        <li class="userinfo-item">
          <el-dropdown>
            <span>
              {{name}}<i class="el-icon-arrow-down"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/account/individualInfo">个人信息</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <span @click="logout">退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      image: require('@/assets/logo.jpg')
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('user/logout')
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters(
      {
        name: 'user/name',
        phone: 'user/phone'
      }
    )
  }
}
</script>

<style lang="stylus" scoped>
$height = 60px;
.aster-head {
  height: $height;
  overflow: hidden;
  .aster-logo {
    float: left;
    margin-left: 50px;
    line-height: $height;
    font-size: 20px;
  }
  .logo-image {
    width: $height;
    vertical-align: top;
  }
  .userinfo {
    float: right;
    line-height: $height;
    margin: 0;
    .userinfo-item {
      float: left;
      margin-right: 50px;
      list-style: none;
      font-size: 16px;
    }
  }
  .el-icon-arrow-down {
    cursor: pointer;
    color: #409EFF;
  }
}
.el-dropdown {
  font-size: unset;
}
</style>
