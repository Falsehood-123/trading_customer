<template>
    <div id="address">
        <van-nav-bar title="我的地址" left-text="返回" left-arrow
        @click-left="toBackHandler"
        @click-right="toAddAddress">
        </van-nav-bar>
        <van-address-list
            v-model="addressCustomers.id"
            :list="addressCustomers"
            @add="toAddAddress"
            @edit="toEditAddress" />
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
    data() {
        return {
            addresses:[],
            customerAddress:{
                customerId:0,
                customerName:""
            }
        }
    },
    created() {
        this.customerAddress.customerId = this.userList.id;
        this.customerAddress.customerName = this.userList.name;
        this.findAddressByCustomerId(this.customerAddress);
    },
    computed:{
        ...mapState("address",["addressCustomers"]),
        ...mapState("login",["userList"])
    },
    methods:{
        ...mapActions("address",["findAddressByCustomerId"]),

        toBackHandler() {
             this.$router.push({path:"/index/user"})
        },
        toAddAddress() {

        },
        toEditAddress() {
            this.$router.push({path:"/other/setAddress"})
        }
    }
}
</script>
<style scoped>

</style>