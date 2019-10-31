import {get,post,post_array} from '../../http/axios'
import axios from 'axios'

export default {
    namespaced:true,
    state:{
        homeList:[]
    },
    getters:{

    },
    mutations:{
        refreshHomeList(state,homeList) {
            state.homeList = homeList;
        }
    },
    actions:{
        async findAllCategory(context) {
            let response = await get("/category/findAll");
            context.commit("refreshHomeList",response.data);
        }
    }
}