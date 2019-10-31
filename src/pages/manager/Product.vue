<template>
    <div id="product">
        <van-nav-bar :title="categoryName" left-text="返回" left-arrow
        @click-left="toBackHandler"
        ></van-nav-bar>
        <van-card
        v-for="p in productList"
        num="1"
        :price="p.price"
        :desc="p.description"
        :title="p.name"
        :thumb="p.photo"
        :key="p.id" 
        >
        <div slot="footer">
            <van-stepper :min=0 v-model="p.number"
            @change="savePriceHandler(p)" />
        </div>
        </van-card>
        <van-submit-bar
        :price="total"
        button-text="提交订单"
        @submit="onSubmit"
        />
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
import {getCategoryId,getCategoryName} from '../../utils/auth'

export default {
    data() {
        return {
            categoryId:getCategoryId(),
            categoryName:getCategoryName()
        }
    },
    created() {
        let categoryId = getCategoryId()
        this.findAllProduct(categoryId);
    },
    computed:{
        ...mapState("home",["homeList"]),
        ...mapState("product",["productList","total"])
    },
    methods:{
        ...mapActions("product",["findAllProduct"]),
        ...mapMutations("product",["setShopCar"]),
        ...mapMutations("shopCar",["addShopCar"]),

        toBackHandler() {
            this.$router.push({path:"/index/home"})
        },
        onSubmit() {
            if(this.total !== 0) {
                this.$router.push({path:"/other/orderComfirm"})
            } else {
                this.$toast({type:"warring",message:"请添加信息 "});
            }
        },
        savePriceHandler(val) {
            let orderLine = {
                productId:val.id,
                productName:val.name,
                price:val.price,
                number:val.number
            }
            console.log(orderLine);
            this.addShopCar(orderLine);
            this.setShopCar(val);
        }
    }
}
</script>