import {get,post,post_array} from '../../http/axios'
import axios from 'axios'
import {getCategoryId,getCategoryName} from '../../utils/auth'

export default {
    namespaced:true,
    state:{
        productList:[],
        shopCar:[],
        total:0,
        orderLine:[]
    },
    getters:{
    },
    mutations:{
        setOrderLine(state,val) {

            
        },
        refreshProductList(state,payload) {
            state.productList = payload;
        },
        setShopCar(state,payload) {
            // 判断原购物车是否有这一产品
            let test = state.shopCar.some((item)=>item.id === payload.id);
            if(test) {
                // 原购物车中有改产品，只需将数量改变就可以
                state.shopCar.forEach((item)=>{
                    if(item.id === payload.id) {
                        item.number = payload.number;
                    }
                })
            } else {
                // 原购物车中没有改产品，将改产品添加进购物车
                state.shopCar.push(payload);
            }
            let total = 0;
            state.shopCar.forEach((item)=>{
                total += (item.number*item.price*100)
            });
            state.total = total;
            if(total === 0) {
                state.shopCar = [];
            }
        }
    },
    actions:{
        async findAllProduct(context,payload) {
            let response = await get("/product/findAll");
            let result = response.data.filter((item)=>{
                return item.categoryId == payload;
            });
            let productList = [];
            result.forEach((item)=>{
                let obj = {
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    status: item.status,
                    photo: item.photo,
                    categoryId: item.categoryId,
                    number:0
                };
                productList.push(obj);
            })
            context.commit("refreshProductList",productList);
        }
    }
}