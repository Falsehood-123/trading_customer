import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import user from './module/user'
import home from './module/home'
import address from './module/address'
import order from './module/order'
import login from './module/login'
import product from './module/product'
import shopCar from './module/shopCar'

export default new Vuex.Store({
  modules:{
    user,
    home,
    address,
    order,
    login,
    product,
    shopCar
  }
})
