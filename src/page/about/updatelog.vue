<template>
    <el-scrollbar >
        <div style="height:500px">
            <el-timeline :reverse="reverse">
                <el-timeline-item v-for="(log, index) in update_logs" :key="index" :timestamp="log.date" placement="top">
                    <el-card>
                        <h4>{{log.log}}</h4>
                        <p>{{log.author}}提交于{{log.date}}</p>
                    </el-card>
                </el-timeline-item>       
            </el-timeline>
        </div>
    </el-scrollbar>
   
</template>

<script>
export default {
    data(){
        return {
            reverse:true,
            update_logs:[{
                date:'2019/01/24',
                author:'李宗仁',
                log:'更新jdk 1.8'
            },{
                date:'2019/02/12',
                author:'李磊',
                log:'添加新功能'
            },{
                date:'2019/03/26',
                author:'张宁',
                log:'引入最新jar包'
            },{
                date:'2019/06/01',
                author:'郭艾伦',
                log:'修复兼容性bug'
            },{
                date:'2019/08/11',
                author:'郭德纲',
                log:'修复功能性bug'
            },{
                date:'2019/09/21',
                author:'易建联',
                log:'引入新jar包'
            }]
        }
    }
}
</script>

<style scoped>
    .el-timeline {
        margin: 0 auto;
        width:400px;
    }
</style>
