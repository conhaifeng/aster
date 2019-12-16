<template>
  <div class="aster-main">
    <el-scrollbar>
      <div class="aster-content">
        <router-view></router-view>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.aster-main {
  overflow: hidden;
  padding: 30px;
  height: 100%;
  box-sizing: border-box;
  background-color: #f0f2f5;
}
.aster-content {
  padding: 10px 0;
  background-color: #fff;
  min-height: calc(100% - 30px);
  margin-bottom: 30px;
  box-sizing: border-box;
}
</style>
