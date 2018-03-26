import Vue from 'vue'
import Router from 'vue-router'
import GoodList from './../views/GoodList.vue'
import  Title from  '@/views/Title.vue'
import  Image from  '@/views/image.vue'
import  Cart from '@/views/Cart.vue'


Vue.use(Router)

export default new Router({
    routes:[
      {
      path:'/',
      name:'GoodList',
      components:{
        default:GoodList,
        title:Title,
        img:Image
      }
    },
    {
      path:'/cart/:cartId',
      name:'cart',
      component:Cart
    }
  ]
})







