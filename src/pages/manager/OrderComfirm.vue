<template>
    <div id="orderComfirm">
        <van-nav-bar title="订单详情" left-text="返回" left-arrow
        @click-left="toBackHandler"
        ></van-nav-bar>
        <div class="contBase">
            <!-- 地址栏 -->
            <van-row>
                <van-col class="left" :span="6">
                    <van-icon size="24px" name="location-o" />
                </van-col>
                <van-col class="right" :span="17" :offset="1">
                    <div class="addressBase">
                        <p style="color:teal">服务地址：</p>
                        <p>{{userList.name}} {{address.tel}}</p>
                        <p>{{address.province}}{{address.city}}{{address.area}}{{address.address}}</p>
                    </div>
                </van-col>
            </van-row>
            <!-- 订单详情栏 -->
            <van-row>
                <van-col :span="6">
                    <div class="left">
                        <van-icon size="24px" name="star-o" />
                    </div>
                </van-col>
                <van-col class="right" :span="17" :offset="1">
                    <p style="color:teal">订单详情：</p>
                    <van-row v-for="s in shopCar" :key="s.id">
                        <van-col :span="8">{{s.name}}</van-col>
                        <van-col :span="4">￥{{s.price}}</van-col>
                        <van-col :span="4">x{{s.number}}</van-col>
                        <van-col :span="8">￥{{s.price*s.number}}</van-col>
                    </van-row>
                    <van-row style="border-top:1px dotted #ededed">
                        <van-col :span="16"></van-col>
                        <van-col :span="8">￥{{total/100}}</van-col>
                    </van-row>
                </van-col>
            </van-row>
            <!-- 服务时间栏 -->
            <van-row>
                <van-col :span="6" class="left">
                    <van-icon size="24px" name="clock-o" />
                </van-col>
                <van-col :span="17" :offset="1" class="right">
                <p style="color:teal">服务时间：</p>
                </van-col>
            </van-row>
            <!-- 支付方式栏 -->
            <van-row>
                <van-col :span="6" class="left">
                    <van-icon size="24px" name="gold-coin-o" />
                </van-col>
                <van-col :span="17" :offset="1" class="right">
                    <p style="color:teal">支付方式</p>
                    <div>第三方平台（支付宝）</div>
                </van-col>
            </van-row>
            <!-- 提交按钮 -->
            <div class="btn">
                <van-button type="primary" size="large" @click="toAddOrderHandler">确认订单</van-button>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
import {getToken} from '../../utils/auth'

export default {
    data() {
        return {
            orderList:[],
            customerId:0,
            address:{}
        }
    },
    created() {
        let token = getToken()
        if(token) {
            this.info(token)
        } else {
            this.$router.push({path:"/"})
        }
        this.customerId = this.userList.id
        this.getAddressId(this.customerId)
        .then((respone)=>{
            this.address = respone.data;
        })
    },
    computed:{
        ...mapState("product",["shopCar"]),
        ...mapState("login",["userList"]),
        ...mapState("product",["total"]),
        ...mapState("shopCar",["orderLines"])
    },
    methods:{
        ...mapActions("login",["info"]),
        ...mapActions("address",["getAddressId"]),
        ...mapActions("order",["saveOrder"]),

        toBackHandler() {
            this.$router.back();
        },
        toAddOrderHandler() {
            let data = {
                customerId:this.userList.id,
                addressId:this.address[0].id,
                orderLines:Array.from(this.orderLines.values())
            }
            this.saveOrder(data)
            .then((response)=>{
                this.$notify({type:"success",message:response.statusText});
                this.$router.push({path:'/index/order'})
            })
        }
    }
}
</script>
<style scoped>
.left {
    padding: 1em 0;
    text-align: center;
}
p {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-top: 5px;
}
.right {
    border-bottom: 1px solid #ededed;
    padding-bottom: .5em;
    font-size: 12px;
}
.btn {
    width: 100%;
    position: absolute;
    bottom: 0;
}
</style>