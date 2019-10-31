<template>
    <div id="login">
        <van-row>
            <van-col>
                <van-image
                fit="contain"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </van-col>
        </van-row>
        <van-cell-group>
            <van-field
                v-model="user.username"
                required
                clearable
                label="用户名"
                placeholder="请输入用户名"
                @click-right-icon="$toast('question')"
            />
        </van-cell-group>
        <van-cell-group>
            <van-field
                v-model="user.password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
                clearable
            />
        </van-cell-group>
        <div style="padding:1em 2em">
            <van-button round type="primary" size="large" @click="loginHandler">登录</van-button>
        </div>
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
    data() {
        return {
            user: {
                "password":"123321",
                "type":"customer",
                "username":"customer1"
            }
        }
    },
    computed:{
        ...mapState("login",["userList"])
    },
    methods:{
        ...mapActions("login",["loginIn"]),

        loginHandler() {
            this.loginIn(this.user)
            .then((response)=>{
                if(response.status === 200) {
                    this.$notify({type:"success",message:"登录成功"});
                    this.$router.push({path:"/index/home"})
                }
            })
        }
    }
}
</script>
<style scoped>

</style>