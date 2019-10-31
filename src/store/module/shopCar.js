import {get,post,post_array} from '../../http/axios'
import axios from 'axios'
import _ from 'lodash'
export default {
    namespaced:true,
    state:{
        orderLines:new Map()
    },
    getters:{
        
    },
    mutations:{
        addShopCar(state,orderLine) {
            state.orderLines.set(orderLine.productId,orderLine);
            state.orderLines = _.clone(state.orderLines);
        },
        // 清空购物后
        clearShopCar(state){
            state.orderLines.clear();
            state.orderLines = _.clone(state.orderLines);
        }
    },
    actions:{
    }
}