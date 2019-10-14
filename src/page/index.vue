<template>
  <div class="index">
    <el-image :src="url" lazy></el-image>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      url: require("@/assets/burning.jpg")
    };
  }
};
</script>

<style scoped>
.index {
  text-align: center;
}
</style>
