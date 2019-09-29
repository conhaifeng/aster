<template>
   <el-collapse>
     <el-collapse-item name="msg-1" title="私信设置">
         <el-switch v-model="stranger" active-text="允许接受陌生人私信" active-color="#13ce66"></el-switch>
         <el-switch v-model="follower" active-text="允许接受关注者私信" active-color="#13ce66"></el-switch>
     </el-collapse-item>
   </el-collapse>
</template>

<script>
export default {
    data(){
        return {
            stranger:true,
            follower:true,
        }
    }
}
</script>

<style>

    .el-collapse {
        margin: 0 auto;
        width: 800px;
    }

    .el-switch {
        margin-bottom: 16px;
        display: block;
    }

    .el-collapse-item__wrap {
        text-align: center;
    }
</style>
