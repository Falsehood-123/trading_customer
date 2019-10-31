import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import OrderList from './components/OrderList'
import moment from 'moment'

Vue.component("Y-order-list",OrderList)

Vue.filter("setDate",function(input){
  return moment(input).format('YYYY-MM-DD HH:mm:ss')
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
