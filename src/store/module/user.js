import {get,post,post_array} from '../../http/axios'
import axios from 'axios'
import {getToken,setToken} from '../../utils/auth'

export default {
    namespaced:true,
    state:{
        userList:[],
        token:getToken()
    },
    getters:{

    },
    mutations:{

    },
    actions:{
        
    }
}