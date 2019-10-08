<template>
    <el-scrollbar class="outter_scroll">
        <el-collapse>
            <el-collapse-item name="msg-1">
                <template slot="title">
                    <h3>私信设置</h3>
                </template>
                <div class="side_title">允许谁给我发私信</div>
                <el-switch v-model="stranger" active-text="允许接受陌生人私信" active-color="#13ce66"></el-switch>
                <el-switch v-model="follower" active-text="允许接受关注者私信" active-color="#13ce66"></el-switch>
            </el-collapse-item>
            <el-collapse-item name="msg-2">
                <template slot="title">
                    <h3>邀请/评论消息设置</h3>
                </template>
                <div class="side_title">有人对我发出邀请时，我会收到消息通知</div>
                <el-switch v-model="mention_me" active-text="提及我" active-color="#13ce66"></el-switch>
                <el-switch v-model="reply_me" active-text="评论或回复我" active-color="#13ce66"></el-switch>
                <el-switch v-model="invite_me" active-text="邀请我回答问题" active-color="#13ce66"></el-switch>
            </el-collapse-item>
            <el-collapse-item name="msg-3">
                <template slot="title">
                    <h3>赞同/赞赏消息设置</h3>
                </template>
                <div class="side_title">有人对我赞同或赞赏时，我会收到消息通知</div>
                <el-switch v-model="agree_me" active-text="赞同我的回答" active-color="#13ce66"></el-switch>
                <el-switch v-model="thanks_me" active-text="感谢我的回答" active-color="#13ce66"></el-switch>
                <el-switch v-model="appreciate_me" active-text="赞赏了我的回答" active-color="#13ce66"></el-switch>
            </el-collapse-item>
            <el-collapse>
            <el-collapse-item name="msg-4">
                <template slot="title">
                    <h3>关注消息设置</h3>
                </template>
                <div class="side_title">我的关注有新动态时，我会收到消息通知</div>
                <el-switch v-model="follow_me" active-text="关注了我" active-color="#13ce66"></el-switch>
                <el-switch v-model="follow_my_column" active-text="关注了我的专栏" active-color="#13ce66"></el-switch>
                <el-switch v-model="new_article_in_column" active-text="专栏有新文章" active-color="#13ce66"></el-switch>
                <el-switch v-model="new_in_followed_answer" active-text="关注的问题有新回答" active-color="#13ce66"></el-switch>
                <el-switch v-model="certificate_expired" active-text="我的礼券即将过期" active-color="#13ce66"></el-switch>
            </el-collapse-item>
            </el-collapse>
        </el-collapse>
        <div class="save_button">
            <el-button type="primary" :plain="true" @click="save">保存设置</el-button>
        </div>
        
    </el-scrollbar>
</template>

<script>
export default {
    data(){
        return {
            stranger:false,
            follower:true,
            mention_me:true,
            reply_me:true,
            invite_me:false,
            agree_me:true,
            thanks_me:true,
            appreciate_me:true,
            follow_me:true,
            follow_my_column:true,
            new_article_in_column:true,
            new_in_followed_answer:true,
            certificate_expired:false,
        }
    },
    methods: {
        save:function(){
            this.$message({
                message:'保存成功',
                type:'success',
                offset:150,
                center:true,
            })
        }
    },
}
</script>

<style scoped>

    .outter_scroll {
        height: 500px;
    }

    .el-collapse {
        margin: 0 auto;
        width: 600px;
    }

    .el-switch {
        margin-bottom: 16px;
        display: block;
        padding-left: 40%;
    }

    .side_title {
        margin-bottom: 10px;
    }

    .save_button {
        width:100px;
        margin: 0 auto;
        margin-top: 20px;
    }

</style>
