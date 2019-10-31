import Vue from 'vue'
import VueRouter from 'vue-router'

import { getToken,getCategoryId } from '../utils/auth'
import { Toast } from 'vant'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'manager',
    component: () => import('../pages/manager/Layout.vue'),
    children:[{
      path:"home",
      component:() => import('../pages/manager/Home.vue')
    },
    {
      path:"order",
      component:() => import('../pages/manager/Order.vue'),
      beforeEnter: (to, from, next) => {  //属于路由自己的拦截器
        let token = getToken();
        if(token){
          // 查询info
          store.dispatch('login/info',token)
          .then(()=>{
            // 当获取万用户信息之后才允许跳转
            next();
          })
        } else {
          Toast("token失效")
          // 跳转到登录
          next({path:'/'})
        }
      }
    },
    {
      path:"user",
      component:() => import('../pages/manager/User.vue')
    }]
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/other',
    name:"other",
    component:() => import('../pages/manager/LayoutOther.vue'),
    children:[{
      path:'address',
      component:() => import('../pages/manager/Address.vue')
    },{
      path:'setAddress',
      component:() => import('../pages/manager/aboutSetAddress.vue')
    },{
      path:'product',
      component:() => import('../pages/manager/Product.vue')
      // beforeEnter: (to, from, next) => {  //属于路由自己的拦截器
      //   let categoryId = getCategoryId();
      //   if(categoryId){
      //     // 查询该类别下的产品
      //     store.dispatch('product/findAllProduct',categoryId)
      //     .then(()=>{
      //       // 当获取信息之后才允许跳转
      //       next();
      //     })
      //   } else {
      //     Toast("token失效")
      //     // 跳转到登录
      //     next({path:'/'})
      //   }
      // }
    },
    {
      path:"orderComfirm",
      component:() => import('../pages/manager/OrderComfirm.vue')
    }]
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
