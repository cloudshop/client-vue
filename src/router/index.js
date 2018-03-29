import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import HomePage from '@/components/HomePage'
import Classify from '@/components/Classify'
import Shopping from '@/components/Shopping'
import Mine from '@/components/Mine'
import Melt from '@/components/Melt'
import Information from '@/components/MineList/Information.vue'
import ShareResults from '../components/MineList/ShareResults.vue'
import news from '@/components/main/news'
import Location  from "@/components/main/location.vue"
import Talk from '../components/main/talk'
import CreditCard from '../components/MineList/CreditCard.vue'
import CreditCardOK from '../components/MineList/CreditCardOK.vue'
import ConfirmAnOrder from '../components/Shopping/ConfirmAnOrder.vue'
import Login from '../components/Login/Login.vue'
import Register from '../components/Login/register.vue'
import SetPsd from '../components/Login/set_psd.vue'
import ChangePsd from '../components/Login/change_psd.vue'
import ChangePsd2 from '../components/Login/change_psd2.vue'

import ClassifySearch from '../components/PageAll/classify_search.vue'
import detailsTwo from '../components/PageAll/detailsTwo.vue'
import indentAll from '../components/PageAll/indentAll.vue'
import PageAll from '../components/PageAll/PageAll.vue'
import PageDetails from '../components/PageAll/PageDetails.vue'
import PageDetailsChild from '../components/PageAll/PageDetailsChild.vue'
import Product from '../components/PageAll/Product.vue'

import collection from '../components/Sher/collection.vue'
import sunorder from  '../components/Sher/sunorder.vue'
import top from '../components/Sher/top-up.vue'
Vue.use(Router)

const  routes = [
  {
    path: '/',
    redirect: 'HomePage'
  },
  {
    path: '/',
    name: 'index',
    component: Index,
    children:[
    {//首页页面
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {//分类页面
      path: '/Classify',
      name: 'Classify',
      component: Classify
    },
    {//购物车页面
      path: '/Shopping',
      name: 'Shopping',
      component: Shopping
    },
      {//我的页面
      path: '/Mine',
      name: 'Mine',
      component: Mine,
    },    
    {//中间部分
      path: '/Melt',
      name: 'Melt',
      component: Melt
    },
     {//个人信息页面
      path:'/Information',
      name: 'Information',
      component: Information,
    },
    {//分享业绩页面
      path:'/ShareResults',
      name: 'ShareResults',
      component: ShareResults,
    },
     {//消息页面
      path:'/news',
      name: 'news',
      component:news,
    },
    {//消息客服页面
      path:'/Talk',
      name: 'Talk',
      component:Talk,
    },
    {//定位页面
      path:'/Location',
      name: 'Location',
      component:Location,
    },
    {//消费支付页面
      path:'/CreditCard',
      name: 'CreditCard',
      component:CreditCard,
    },
    {//消费支付页面确认？？
      path:'/CreditCardOK',
      name: 'CreditCardOK',
      component:CreditCardOK,
    }, 
    {//确认订单
      path:'/ConfirmAnOrder',
      name: 'ConfirmAnOrder',
      component:ConfirmAnOrder,
    },
    {//登陆页面
      path: '/Login',
      name: 'Login',
      component: Login
    },
     {//验证码
      path: '/Register',
      name: 'Register',
      component: Register
    },
     {//设置密码
      path: '/SetPsd',
      name: 'SetPsd',
      component: SetPsd
    },
     {  
      path: '/ChangePsd',
      name: 'ChangePsd',
      component: ChangePsd
    },
     {
      path: '/ChangePsd2',
      name: 'ChangePsd2',
      component: ChangePsd2
    },
    {
      path: '/ClassifySearch',
      name: 'ClassifySearch',
      component: ClassifySearch
    },
    {
      path: '/detailsTwo',
      name: 'detailsTwo',
      component: detailsTwo
    },
    {
      path: '/indentAll',
      name: 'indentAll',
      component: indentAll
    },
    {
      path: '/PageAll',
      name: 'PageAll',
      component: PageAll
    },
    {
      path: '/PageDetails',
      name: 'PageDetails',
      component: PageDetails
    },
    {
      path: '/PageDetailsChild',
      name: 'PageDetailsChild',
      component:PageDetailsChild
    },
    {
      path: '/Product',
      name: 'Product',
      component:Product
    },
    {
      path: '/collection',
      name: 'collection',
      component:collection
    },
    {
      path: '/sunorder',
      name: 'sunorder',
      component:sunorder
    },
    {
      path: '/top',
      name: 'top',
      component:top
    },
   ]
  },
]

const router =  new Router({
    routes
})

// router.afterEach((to,from,next)=>{
//   setTimeout(function () {
//     console.log('拦截');
// }, 0);
// })

export default router;
