import Vue from 'vue'
import Router from 'vue-router'
import GooddList from './../views/GoodList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods/:goodsId',
      name: 'GooddList',
      component: GooddList
    }
  ]
})
