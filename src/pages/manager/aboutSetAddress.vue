<template>
    <div id="aboutSetAddress">
        <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        area-columns-placeholder="['请选择', '请选择', '请选择']"
        />
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
    data() {
        searchResult: []
    },
    computed:{
        ...mapState("")
    }
}
</script>
<style scoped>

</style>