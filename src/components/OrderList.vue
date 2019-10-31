<template>
    <div id="orderList">
        <ul>
            <li v-for="o in data" :key="o.id">
                <van-row>
                    <van-col :span="6">
                        <div class="orderImg">
                            <img src="https://img.yzcdn.cn/vant/t-thirt.jpg" alt="">
                        </div>
                    </van-col>
                    <van-col :span="17" :offset="1">
                        <p>下单时间：{{o.orderTime | setDate}}</p>
                        <p>价格：{{o.total}}</p>
                        <p>状态：{{o.status}}</p>
                        <div class="btns">
                            <div v-if="o.status ==='待确认'">
                                <van-button size="mini" plain type="primary" @click="confirmOrder(o.id)">确认完成</van-button>
                            </div>
                        </div>
                    </van-col>
                </van-row>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['data'],
    methods:{
        confirmOrder(orderId) {
            return this.$emit("orderConfirm",orderId);
        }
    }
}
</script>
<style scoped>
.orderImg {
    width: 100%;
    height: 100px;
    padding: .5em;
    box-sizing: border-box;
}
.orderImg img {
    width: 100%;
}
p {
    margin: 0;
    font-size: 12px;
    margin-top: 5px;
}
</style>