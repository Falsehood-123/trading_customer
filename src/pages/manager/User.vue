<template>
    <div id="user">
        <div class="photoBack">
            <div class="photo">
                <img class="detail" :src="userList.avatar" alt="error">
            </div>
            <div class="customerName">昵称：{{userList.name}}</div>
            <div class="quitBtn">
                <van-icon name="cross" @click="logoutHandler"/>
            </div>
        </div>
        <van-row>
            <van-col :span="24">
                <van-cell title="我的收货地址" icon="location-o" 
                is-link
                @click="toGetAddress"
                 />
            </van-col>
        </van-row>
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
    data() {
        return {

        }
    },
    created() {
        if(this.token) {
            this.info(this.token)
        } else {
            this.$router.push({path:"/"})
        }
    },
    computed: {
        ...mapState("login",["userList"]),
        ...mapState("user",["token"])
    },
    methods:{
        ...mapActions("login",["logout","info"]),
        toGetAddress() {
            this.$router.push({path:"/other/address"})
        },
        logoutHandler() {
            this.logout()
            .then(()=>{
                this.$router.push({path:"/"});
                // this.$router.go(-2);
            })
        }
    }
}
</script>
<style scoped>
#user {
    position: relative;
}
.photoBack {
    position: relative;
    width: 100%;
    height: 300px;
}
.photo {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}
.detail {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.customerName {
    position: absolute;
    width: 100%;
    text-align: center;
    color: rosybrown;
    line-height: 2em;
    bottom: 10px;
}
.quitBtn {
    position: absolute;
    top: 1em;
    right: 1em;
}
</style>