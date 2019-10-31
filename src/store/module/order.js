import {get,post,post_array,post_obj_array} from '../../http/axios'
import axios from 'axios'

export default {
    namespaced:true,
    state:{
        orderList:[]
    },
    getters:{
        filterOrderList(state) {
            return (status)=>{
                return state.orderList.filter(item=>item.status === status)
              }
        }
    },
    mutations:{
        refreshOrderList(state,payload) {
            state.orderList = payload;
        }
    },
    actions:{
        async findAllOrderByCustomerId(context,payload) {
            let response = await get("/order/query?customerId="+payload);
            context.commit("refreshOrderList",response.data);
        },
        async saveOrder({commit},data){
            // 2. 调用后台接口完成保存
            let response = await post_obj_array('/order/save',data)
            // 3. 清空购物车（order -> shopcar）
            commit('shopCar/clearShopCar',null,{root:true})
      
            return response;
          }
    }
}