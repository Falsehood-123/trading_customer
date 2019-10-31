import {get,post,post_array} from '../../http/axios'
import axios from 'axios'

export default {
    namespaced:true,
    state:{
        addressCustomers:[]
    },
    getters:{

    },
    mutations:{
        refreshAddressCustomers(state,payload) {
            state.addressCustomers = payload;
        }
    },
    actions:{
        async findAddressByCustomerId(context,payload) {
            let response = await get("/address/findByCustomerId?id="+payload.customerId)
            let addresses = [];
            response.data.forEach((item)=>{
                let obj = {
                    id:item.id,
                    tel:item.telephone,
                    address:item.province+""+item.city+""+item.area+""+item.address,
                    name:payload.customerName
                };
                addresses.push(obj);
            });
            context.commit("refreshAddressCustomers",addresses);
        },
        async getAddressId(context,customerId) {
            let response = await get("/address/findByCustomerId?id="+customerId);
            return response;
        }
    }
}