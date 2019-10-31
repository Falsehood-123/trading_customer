<template>
    <div id="order">
        <van-tabs animated v-model="activeName">
            <van-tab title="全部">
                <Y-order-list :data="orderList" name="a"></Y-order-list>
            </van-tab>
            <van-tab title="待支付">
                <Y-order-list :data="filterOrderList('待支付')" name="b"></Y-order-list>
            </van-tab>
            <van-tab title="待服务">
                <Y-order-list :data="filterOrderList('待服务')" name="c"></Y-order-list>
            </van-tab>
            <van-tab title="待确认">
                <Y-order-list :data="filterOrderList('待确认')" name="d"></Y-order-list>
            </van-tab>
            <van-tab title="已完成">
                <Y-order-list :data="filterOrderList('已完成')" name="e"></Y-order-list>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import {mapActions, mapState, mapGetters} from 'vuex'
export default {
    data() {
        return {
            customerId:0,
            activeName:"a"
        }
    },
    computed:{
        ...mapState("login",["userList"]),
        ...mapState("order",["orderList"]),
        ...mapGetters("order",["filterOrderList"])
    },
    created(){
        this.customerId = this.userList.id
        this.findAllOrderByCustomerId(this.customerId)
    },
    methods:{
        ...mapActions("order",["findAllOrderByCustomerId"])
    }
}
</script>
<style scoped>

</style>