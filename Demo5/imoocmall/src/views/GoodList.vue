<template>
            <div>这是商品列表页面{{msg}}
              <span>{{$route.params.goodsId}}</span>
              <span>{{$route.params.name}}</span>
              <br>
              <router-link to="/goods/title">显示标题</router-link>
              <router-link to="/goods/image">显示图片</router-link>
              <div>
                <router-view></router-view>
              </div>
              <router-link v-bind:to="{name:'cart',params:{cartId:123}}">跳转到购物车页面</router-link>
              
            </div>
</template>
<style>

</style>
<script>
        export  default {
          data(){
                return{
                     msg:"xxxxx"
                }
          },
          methods:{
            jump(){
              this.$router.push({path:"/cart?goodsId=123"});
            }
          }
        }
</script>
