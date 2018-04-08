import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import HomePage from '@/components/HomePage'  //首页
import Classify from '@/components/Classify' //分类
import Shopping from '@/components/Shopping' // 购物车
import Mine from '@/components/Mine'        // 我的
import RemainingSum from '../components/MineList/RemainingSum.vue'  //余额页面
import Stamps from '../components/MineList/Stamps.vue'  //贡融券页面
import Melt from '@/components/Melt'
import Information from '@/components/MineList/Information.vue'   //个人信息
import NickName from '../components/MineList/NickName.vue'        //修改昵称
import MyAddress from '../components/MineList/MyAddress.vue'     //我的地址
import AddAddress from '../components/MineList/AddAddress.vue'   //编辑我的地址
import MyTeam from '../components/MineList/MyTeam.vue'  //我的分享人页面
import ID from '../components/MineList/ID.vue'  //账号与安全页面
import Integral from '../components/MineList/Integral.vue' //贡融积分页面
import SellerCenter from '../components/MineList/SellerCenter'  //商户中心
import OrdinaryBusiness from '../components/MineList/OrdinaryBusiness.vue'  //申请成为商家
import Appreciation from '../components/MineList/Appreciation.vue'  //支付增值商户年费
import MerchantsPayCost from '../components/MineList/MerchantsPayCost.vue' //商家平台使用缴纳
import CreditCard from '../components/MineList/CreditCard.vue'   //消费支付
import CreditCardOK from '../components/MineList/CreditCardOK.vue' //消费支付确认订单
import collection from '../components/Sher/collection.vue'  //我的收藏
import indentAll from '../components/PageAll/indentAll.vue' //全部订单
import detailsTwo from '../components/PageAll/detailsTwo.vue' //商品清单
import giving from '../components/Sher/giving.vue' //积分赠送
import giving2 from '../components/Sher/giving2.vue' //积分赠送——确认订单
import changeimg from '../components/changeimg/changeImg.vue' //积分兑换
import zhekou from '../components/sher/zhekou.vue' //积分折扣 
import redemption from '../components/redemption/redemption.vue' //积分换购


import ShareResults from '../components/MineList/ShareResults.vue' 
import news from '@/components/main/news'
import Location  from "@/components/main/location.vue"
import Talk from '../components/main/talk'

import ConfirmAnOrder from '../components/Shopping/ConfirmAnOrder.vue'


import ConfirmAnOrderChild from '../components/Shopping/ConfirmAnOrderChild.vue'

import Login from '../components/Login/Login.vue'
import Register from '../components/Login/register.vue'
import SetPsd from '../components/Login/set_psd.vue'
import ChangePsd from '../components/Login/change_psd.vue'
import ChangePsd2 from '../components/Login/change_psd2.vue'

import ClassifySearch from '../components/PageAll/classify_search.vue'


import PageAll from '../components/PageAll/PageAll.vue'
import PageDetails from '../components/PageAll/PageDetails.vue'
import PageDetailsChild from '../components/PageAll/PageDetailsChild.vue'
import Product from '../components/PageAll/Product.vue'


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
    { //商品清单
      path: '/detailsTwo',
      name: 'detailsTwo',
      component: detailsTwo
    },
    { //全部订单
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
    { //我的收藏
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
    {
      path: '/ConfirmAnOrderChild',
      name: 'ConfirmAnOrderChild',
      component:ConfirmAnOrderChild
    },
    { //商家平台使用缴纳
      path: '/MerchantsPayCost',
      name: 'MerchantsPayCost',
      component:MerchantsPayCost
    },
    {  //修改昵称
      path: '/NickName',
      name: 'NickName',
      component:NickName
    },
    { //余额
      path: '/RemainingSum',
      name: 'RemainingSum',
      component:RemainingSum
    },
    { //贡融券
      path: '/Stamps',
      name: 'Stamps',
      component:Stamps
    },
    { //贡融积分
      path: '/Integral',
      name: 'Integral',
      component:Integral
    },
    { //商户中心
      path: '/SellerCenter',
      name: 'SellerCenter',
      component:SellerCenter
    },
     { //申请成为商家
      path: '/OrdinaryBusiness',
      name: 'OrdinaryBusiness',
      component:OrdinaryBusiness
    }, 
    { //申请成为商家
      path: '/Appreciation',
      name: 'Appreciation',
      component:Appreciation
    },
    { //我的地址
      path: '/MyAddress',
      name: 'MyAddress',
      component:MyAddress
    },
    { //编辑我的地址
      path: '/AddAddress',
      name: 'AddAddress',
      component:AddAddress
    },
    { //编辑我的地址
      path: '/MyTeam',
      name: 'MyTeam',
      component:MyTeam
    },
    { //账号与安全页面
      path: '/ID',
      name: 'ID',
      component:ID
    },
    { //积分赠送页面
      path: '/giving',
      name: 'giving',
      component:giving
    },
    { //积分赠送页面-确认订单
      path: '/giving2',
      name: 'giving2',
      component:giving2
    },
    { // 积分兑换
      path: '/changeimg',
      name: 'changeimg',
      component:changeimg
    },
    { // 积分兑换
      path: '/zhekou',
      name: 'zhekou',
      component:zhekou
    },
    { // 积分换购
      path: '/redemption',
      name: 'redemption',
      component:redemption
    }
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
