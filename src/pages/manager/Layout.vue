<template>
    <div id="layout">
        <router-view/>
        <van-tabbar v-model="active" @change="tabChangeHandler">
            <van-tabbar-item name="/index/home" icon="star-o">首页</van-tabbar-item>
            <van-tabbar-item name="/index/order" icon="search">订单</van-tabbar-item>
            <van-tabbar-item name="/index/user" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active:0
        }
    },
    methods:{
        // 底部点击改变页面
        tabChangeHandler(path){
            this.$router.push({path})
        }
    }
}
</script>