<template>
    <el-carousel type="card" height="300px" :autoplay="false">
        <el-carousel-item v-for="(pic, index) in pics" :key="index">
            <img :src="pic.name" width="400" height="300" >
            <div class='back-image'>{{pic.txt}}</div>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    name:'about-about',
    computed: {

        pics: function () {
            var pics = new Array();
           
            pics.push({'name':require('../../assets/pic1.jpg'), 'txt':'若有所思'})
            pics.push({'name':require('../../assets/pic2.jpg'), 'txt':'煞有介事'})
            pics.push({'name':require('../../assets/pic3.jpg'), 'txt':'旁若无人'})
            pics.push({'name':require('../../assets/pic4.jpg'), 'txt':'大智若愚'})

            return pics
        }
    }
}
</script>

<style>
    .el-carousel {
        margin: 0 auto;
        width: 800px;
    }

    .el-carousel__item h3 {
        color: rgb(180, 180, 219);
        font-size: 14px;
        line-height: 200px;
    
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .back-image {
        position:absolute; 
        z-index:2; 
        left:10px; 
        top:10px;
    }
   
</style>

