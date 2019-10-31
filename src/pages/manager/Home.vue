<template>
    <div id="home">
        <div class="photoBack">
            <img class="detail" src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
        </div>
        <van-grid :column-num="3">
            <van-grid-item
                v-for="h in homeList"
                :key="h.id"
                :icon="h.icon"
                :text="h.name"
                @click="toProduct(h)" />
        </van-grid>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
import {setCategoryId,setCategoryName, getCategoryId} from '../../utils/auth'

export default {
    data() {
        return {

        }
    },
    created() {
        this.findAllCategory();
    },
    computed:{
        ...mapState("home",["homeList"])
    },
    methods:{
        ...mapActions("home",["findAllCategory"]),
        toProduct(data) {
            setCategoryId(data.id);
            setCategoryName(data.name);
            let categoryId = getCategoryId();
            if(categoryId == data.id) {
                this.$router.push({path:"/other/product"});
            }
            
        }
    }
}
</script>
<style scoped>
.photoBack {
    position: relative;
    width: 100%;
    height: 250px;
}
.detail {
    width: 100%;
    height: 100%;
}
</style>