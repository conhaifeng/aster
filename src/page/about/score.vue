<template>
    <el-card shadow="hover">
        <div slot="header">请评分</div>
        <el-rate v-model="score" show-text></el-rate>
        <br>
        <el-input type="textarea" v-model="remark" placeholder="请输入" :autosize="{ minRows: 2, maxRows: 6 }"></el-input>
    </el-card>
</template>

<script>
export default {
    data(){
        return {
            score:0,
            remark:'',
        }
    }
}
</script>

<style scoped>

    .el-card {
        margin: 0 auto;
        width: 200px;
    }
    
</style>
