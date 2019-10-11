<template>
  <el-container class="container">
    <el-header>
      <div class="header-container">
        <a id="logo" href="//10.100.108.23:8080">
          <img :src="headerLogo" class="header-logo">
          <span>Aster</span>
        </a>

        <ul class="nav">
          <li class="nav-item">
            <router-link to="/message/new">
              <i class="el-icon-message-solid"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login">登录</router-link>
          </li>
        </ul>
      </div>
    </el-header>
    <el-scrollbar class="page-container-scroll">
      <div class="page-container">
        <el-container>
          <el-aside width="20%">
            <el-scrollbar class="menu-nav">
              <el-menu
                default-active="['2']"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  <span>处理中心</span>
                </el-menu-item>
                <el-submenu index="2" disabled.bool="false">
                  <template slot="title">
                    <i class="el-icon-s-platform"></i>
                    <span>产品中心</span>
                  </template>
                  <el-menu-item index="2-1">
                    <router-link to="/order/create">创建订单</router-link>
                  </el-menu-item>
                  <el-menu-item index="2-2">
                    <router-link to="/order/list">我的订单</router-link>
                  </el-menu-item>
                </el-submenu>
                <el-submenu index="settings" show-timeout.number="5000">
                  <template slot="title">
                    <i class="el-icon-user-solid"></i>
                    <span>个人设置</span>
                  </template>
                  <el-menu-item index="settings-info">
                    <router-link to="/settings/self">个人信息</router-link>
                  </el-menu-item>
                  <el-menu-item index="settings-safe">
                    <router-link to="/settings/safe">安全设置</router-link>
                  </el-menu-item>
                  <el-menu-item index="settings-msg">
                    <router-link to="/settings/msg">消息设置</router-link>
                  </el-menu-item>
                </el-submenu>
                <el-submenu index="about">
                  <template slot="title">
                    <i class="el-icon-info"></i>
                    <span>关于</span>
                  </template>
                  <el-menu-item index="about-about">
                    <router-link to="/about/about">官方说明</router-link>
                  </el-menu-item>
                  <el-menu-item index="about-fedback">
                    <router-link to="/about/feedback">意见反馈</router-link>
                  </el-menu-item>
                  <el-menu-item index="about-log">
                    <router-link to="/about/log">更新日志</router-link>
                  </el-menu-item>
                  <el-menu-item index="about-score">
                    <router-link to="/about/score">去评分</router-link>
                  </el-menu-item>
                </el-submenu>
                <el-menu-item index="help">
                  <template slot="title">
                    <i class="el-icon-s-help"></i>
                    <span>帮助</span>
                  </template>
                </el-menu-item>
              </el-menu>
            </el-scrollbar>
          </el-aside>
        </el-container>
        <div class="page-component">
          <keep-alive include="about-feedback, about-about">
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </el-scrollbar>
  </el-container>
</template>


<script>
export default {
  data: function() {
    return {
      headerLogo: require("./assets/logo.jpg"),
      fit: "fill"
    };
  }
};
</script>

<style>
.container {
  height: 100vh;
}

.page-container-scroll {
  height: 100vh;
}

.header-container {
  height: 60px;
  width: 85vw;
  margin: 0 auto;
  line-height: 60px;
  border-bottom: 1px solid #dcdfe6;
}

.page-container {
  width: 85vw;
  margin: 0 auto;
  background: #f3f3f4;
  min-height: calc(100vh - 60px);
}

.menu-nav {
  width: 240px;
  position: fixed;
  top: 0;
  bottom: 0;
  margin-top: 60px;
  transition: padding-top 0.3s;
  background-color: #545c64;
}

.menu-nav a {
  color:#cecece;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}

.page-component {
  padding-top: 60px;
  padding-left: 18vw;
  padding-bottom: 50px;
}

.nav {
  margin: 0;
  float: right;
}

.nav-item {
  float: left;
  list-style: none;
  padding: 0 17px;
  margin: 0;
}

.header-logo {
  width: 40px;
  height: 40px;
  padding: 10px;
  vertical-align: middle;
}

#logo {
  display: inline-block;
  font-size: 1.5em;
  line-height: 40px;
  padding-left: 20px;
  color: #273849;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-weight: 500;
}

#logo span {
  vertical-align: middle;
}
</style>

<style scoped>
.el-icon-message-solid {
  line-height: inherit;
  font-size: 20px;
}

.el-header {
  z-index: 9999;
}
</style>
