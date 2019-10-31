import {get,post,post_array} from '../../http/axios'
import axios from 'axios'
import {getToken,setToken,removeToken} from '../../utils/auth'

export default {
    namespaced:true,
    state:{
        userList:[],
        token:getToken()
    },
    getters:{

    },
    mutations:{
        refreshList(state,userList) {
            state.userList = userList;
        },
        refreshToken(state,token) {
            state.token = token;
        }
    },
    actions:{
        async loginIn(context,user) {
            let response = await axios.post("/user/login",user);
            let token = response.data.token;
            setToken(token);
            context.dispatch("info",token);
            return response;
        },
        async info(context,token) {
            let response = await get("/user/info?token="+token);
            context.commit("refreshList",response.data)
        },
        async logout(context) {
            await post("/user/logout");
            removeToken();
            context.commit("refreshToken",null);
            context.commit("refreshList",[]);
        }
    }
}