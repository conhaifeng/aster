<template>
  <el-container>
        <el-aside width="20%" >
         <el-scrollbar class="outer-menu">
              <el-menu default-active="['2']">
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span>处理中心</span>
              </el-menu-item>
              <el-submenu index="2" disabled.bool=false>
                <template slot="title">
                  <i class="el-icon-s-platform"></i>
                  <span>产品中心</span>
                </template>
                <el-menu-item index="2-1">订单</el-menu-item>
                <el-menu-item index="2-2">商品</el-menu-item>
                <el-menu-item index="2-3">收付款</el-menu-item>
              </el-submenu>
              <el-submenu index="settings"  show-timeout.number=5000>
                <template slot="title">
                  <i class="el-icon-user-solid"></i>
                  <span>个人设置</span>
                </template>
                <el-menu-item index="settings-info">
                  <router-link to="/settings/self">个人信息</router-link>
                </el-menu-item>
                <el-menu-item index="settings-safe">安全设置</el-menu-item>
                <el-menu-item index="settings-common">通用设置</el-menu-item>
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
        <el-container >
          <el-main class="page-component">
            <keep-alive include="about-feedback, about-about">
              <router-view></router-view> 
            </keep-alive>
          </el-main>
        </el-container>
  </el-container>
</template>


<script>
export default {
  
}
</script>

<style>

  a {
    text-decoration: none;
  }

  .router-link-active {
      text-decoration: none;
  }

  .page-component {
    padding-top: 60px;
  }

  .outer-menu {
    height: 600px;
  }

  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
</style>
