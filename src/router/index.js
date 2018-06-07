import Vue from 'vue'
import Router from 'vue-router'

const Index = r => require.ensure( [], () => r (require('@/components/index')));
const HomePage = () => import(/* webpackChunkName: "HomePage" */ '@/components/HomePage') //
const Classify = () => import(/* webpackChunkName: "Classify" */ '@/components/Classify') //分类
const Shopping = () => import(/* webpackChunkName: "Shopping" */ '@/components/Shopping') //
const Mine = () => import(/* webpackChunkName: "Mine" */ '@/components/Mine') //

const city = () => import(/* webpackChunkName: "city" */ '@/components/main/city') //
const search = () => import(/* webpackChunkName: "search" */ '@/components/search') //
const RemainingSum = () => import(/* webpackChunkName: "RemainingSum" */ '@/components/MineList/RemainingSum') //
const Stamps = () => import(/* webpackChunkName: "Stamps" */ '@/components/MineList/Stamps') //
const myQRCode = () => import(/* webpackChunkName: "myQRCode" */ '@/components/myQRCode') //
const Information = () => import(/* webpackChunkName: "Information" */ '@/components/MineList/Information.vue') //
const searchShop = () => import(/* webpackChunkName: "searchShop" */ '@/components/PageAll/searchShop.vue') //
const NickName = () => import(/* webpackChunkName: "NickName" */ '@/components/MineList/NickName.vue') //
const MyAddress = () => import(/* webpackChunkName: "MyAddress" */ '@/components/MineList/MyAddress.vue') //
const AddAddress = () => import(/* webpackChunkName: "AddAddress" */ '@/components/MineList/AddAddress.vue') //
const MyTeam = () => import(/* webpackChunkName: "MyTeam" */ '@/components/MineList/MyTeam.vue')  //我的团队
const MyTeam2 = () => import(/* webpackChunkName: "MyTeam2" */ '@/components/MineList/MyTeam2.vue') //我的团队二级页面
const ID = () => import(/* webpackChunkName: "ID" */ '@/components/MineList/ID.vue') //
const Integral = () => import(/* webpackChunkName: "Integral" */ '@/components/MineList/Integral.vue') //
const SellerCenter = () => import(/* webpackChunkName: "SellerCenter" */ '@/components/MineList/SellerCenter') //
const OrdinaryBusiness = () => import(/* webpackChunkName: "OrdinaryBusiness" */ '@/components/MineList/OrdinaryBusiness.vue') //
const Appreciation = () => import(/* webpackChunkName: "Appreciation" */ '@/components/MineList/Appreciation.vue') //
const MerchantsPayCost = () => import(/* webpackChunkName: "MerchantsPayCost" */ '@/components/MineList/MerchantsPayCost.vue') //
const CreditCard = () => import(/* webpackChunkName: "CreditCard" */ '@/components/MineList/CreditCard.vue') //
const CreditCardOK = () => import(/* webpackChunkName: "CreditCardOK" */ '@/components/MineList/CreditCardOK.vue') //
const Collection = () => import(/* webpackChunkName: "Collection" */ '@/components/Sher/Collection.vue') //
const IndentAll = () => import(/* webpackChunkName: "IndentAll" */ '@/components/PageAll/IndentAll.vue') //
const DetailsTwo = () => import(/* webpackChunkName: "DetailsTwo" */ '@/components/PageAll/DetailsTwo.vue') //
const giving = () => import(/* webpackChunkName: "giving" */ '@/components/Sher/Giving.vue') //
const giving2 = () => import(/* webpackChunkName: "giving2" */ '@/components/Sher/Giving2.vue') //
const IntegralDiscount = () => import(/* webpackChunkName: "IntegralDiscount" */ '@/components/IntegralDiscount/IntegralDiscount.vue') //
const Redemption = () => import(/* webpackChunkName: "Redemption" */ '@/components/redemption/Redemption.vue') //
const ShareResults = () => import(/* webpackChunkName: "ShareResults" */ '@/components/MineList/ShareResults.vue') //
const Pay = () => import(/* webpackChunkName: "Pay" */ '@/components/MineList/Pay.vue') //
const News = () => import(/* webpackChunkName: "News" */ '@/components/main/News.vue') //
const setpaypsd = () => import(/* webpackChunkName: "setpaypsd" */ '@/components/My/paypsd.vue') //
const IDcard = () => import(/* webpackChunkName: "IDcard" */ '@/components/My/IDcard.vue') //
const Myhead = () => import(/* webpackChunkName: "Myhead" */ '@/components/MineList/Myhead.vue') //
const addressYes = () => import(/* webpackChunkName: "addressYes" */ '@/components/MineList/addressYes.vue') // 修改收货地址
const Approve = () => import(/* webpackChunkName: "Approve" */ '@/components/MineList/Approve.vue') // 实名认证
const ConfirmAnOrder = () => import(/* webpackChunkName: "ConfirmAnOrder" */ '@/components/Shopping/ConfirmAnOrder.vue') //
const ConfirmAnOrderChild = () => import(/* webpackChunkName: "ConfirmAnOrderChild" */ '@/components/Shopping/ConfirmAnOrderChild.vue') //
const Login = () => import(/* webpackChunkName: "setpaypsd" */ '@/components/Login/Login.vue') //
const Register = () => import(/* webpackChunkName: "Register" */ '@/components/Login/Register.vue') //
const SetPsd = () => import(/* webpackChunkName: "SetPsd" */ '@/components/Login/SetPsd.vue') //
const ChangePsd = () => import(/* webpackChunkName: "ChangePsd" */ '@/components/Login/Changepsd.vue') //
const ChangePsd2 = () => import(/* webpackChunkName: "ChangePsd2" */ '@/components/Login/Changepsd2.vue') //
const ClassifySearch = () => import(/* webpackChunkName: "ClassifySearch" */ '@/components/PageAll/ClassifySearch.vue') //
const PageAll = () => import(/* webpackChunkName: "PageAll" */ '@/components/PageAll/PageAll.vue') //
const PageDetails= () => import(/* webpackChunkName: "PageDetails" */ '@/components/PageAll/PageDetails.vue')
const PageDetailsChild= () => import(/* webpackChunkName: "PageDetailsChild" */ '@/components/PageAll/PageDetailsChild.vue')
const Product= () => import(/* webpackChunkName: "Product" */ '@/components/PageAll/Product.vue')
const RegisterNew= () => import(/* webpackChunkName: "RegisterNew" */ '@/components/Login/RegisterNew.vue')
const sunorder= () => import(/* webpackChunkName: "sunorder" */ '@/components/Sher/Sunorder.vue')
const top= () => import(/* webpackChunkName: "top" */ '@/components/Sher/Topup.vue')
const Offline= () => import(/* webpackChunkName: "Offline" */ '@/components/Sher/Offline.vue')
const Agreement= () => import(/* webpackChunkName: "Agreement" */ '@/components/Sher/Agreement.vue')
const Servershop= () => import(/* webpackChunkName: "Servershop" */ '@/components/MineList/Servershop.vue')      //服务商首页
const Servershop2= () => import(/* webpackChunkName: "Servershop2" */ '@/components/MineList/servershop2.vue')    //支付服务商两万元
const Xorders= () => import(/* webpackChunkName: "Xorders" */ '@/components/MineList/Xorders.vue')    //线下订单
const Cash= () => import(/* webpackChunkName: "Cash" */ '@/components/MineList/Cash.vue')    //提现
const recevingCode= () => import(/* webpackChunkName: "recevingCode" */ '@/components/MineList/recevingCode.vue')    // 收款码
const grpay= () => import(/* webpackChunkName: "grpay" */ '@/components/main/Grpay.vue') //扫码付
const Surepay= () => import(/* webpackChunkName: "Surepay" */ '@/components/main/Surepay.vue') //扫码付2
Vue.use(Router)

const routes = [{
        path: '/',
        redirect: 'HomePage'
    },
    {
        path: '/',
        name: 'index',
        component: Index,
        children: [{ //首页页面
                path: '/HomePage',
                name: 'HomePage',
                component: HomePage
            },
            { //分类页面
                path: '/Classify',
                name: 'Classify',
                component: Classify
            },
            { //city
                path: '/city',
                name: 'city',
                component: city
            },
            { //购物车页面
                path: '/Shopping',
                name: 'Shopping',
                component: Shopping
            },
            { //我的页面
                path: '/Mine',
                name: 'Mine',
                component: Mine,
            },
            { //中间部分
                path: '/myQRCode',
                name: 'myQRCode',
                component: myQRCode
            },
            { //个人信息页面
                path: '/Information',
                name: 'Information',
                component: Information,
            },
            { //分享业绩页面
                path: '/ShareResults',
                name: 'ShareResults',
                component: ShareResults,
            },
            { //消息页面
                path: '/News',
                name: 'News',
                component: News,
            },
            // { //消息客服页面
            //     path: '/Talk',
            //     name: 'Talk',
            //     component: Talk,
            // },
            // { //定位页面
            //     path: '/Location',
            //     name: 'Location',
            //     component: Location,
            // },
            { //消费支付页面
                path: '/CreditCard',
                name: 'CreditCard',
                component: CreditCard,
            },
            { //支付方式
                path: '/Pay',
                name: 'Pay',
                component: Pay,
            },
            { //消费支付页面确认？？
                path: '/CreditCardOK',
                name: 'CreditCardOK',
                component: CreditCardOK,
            },
            { //确认订单
                path: '/ConfirmAnOrder',
                name: 'ConfirmAnOrder',
                component: ConfirmAnOrder,
            },
            { //登陆页面
                path: '/Login',
                name: 'Login',
                component: Login
            },
            { //验证码
                path: '/Register',
                name: 'Register',
                component: Register
            },
            { //验证码
                path: '/RegisterNew',
                name: 'RegisterNew',
                component: RegisterNew
            },
            { //设置密码
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
                path: '/DetailsTwo',
                name: 'DetailsTwo',
                component: DetailsTwo
            },
            { //全部订单
                path: '/IndentAll',
                name: 'IndentAll',
                component: IndentAll
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
                component: PageDetailsChild
            },
            {
                path: '/Product',
                name: 'Product',
                component: Product
            },
            { //我的收藏
                path: '/Collection',
                name: 'Collection',
                component: Collection
            },
            {
                path: '/sunorder',
                name: 'sunorder',
                component: sunorder
            },
            {
                path: '/top',
                name: 'top',
                component: top
            },
            {
                path: '/ConfirmAnOrderChild',
                name: 'ConfirmAnOrderChild',
                component: ConfirmAnOrderChild
            },
            { //商家平台使用缴纳
                path: '/MerchantsPayCost',
                name: 'MerchantsPayCost',
                component: MerchantsPayCost
            },
            { //修改昵称
                path: '/NickName',
                name: 'NickName',
                component: NickName
            },
            { //余额
                path: '/RemainingSum',
                name: 'RemainingSum',
                component: RemainingSum
            },
            { //贡融券
                path: '/Stamps',
                name: 'Stamps',
                component: Stamps
            },
            { //贡融积分
                path: '/Integral',
                name: 'Integral',
                component: Integral
            },
            { //商户中心
                path: '/SellerCenter',
                name: 'SellerCenter',
                component: SellerCenter
            },
            { //申请成为商家
                path: '/OrdinaryBusiness',
                name: 'OrdinaryBusiness',
                component: OrdinaryBusiness
            },
            { //申请成为商家
                path: '/Appreciation',
                name: 'Appreciation',
                component: Appreciation
            },
            { //我的地址
                path: '/MyAddress',
                name: 'MyAddress',
                component: MyAddress
            },
            { //编辑我的地址
                path: '/AddAddress',
                name: 'AddAddress',
                component: AddAddress
            },
            { //我的团队
                path: '/MyTeam',
                name: 'MyTeam',
                component: MyTeam
            },
            { //我的团队二级页面
                path: '/MyTeam2',
                name: 'MyTeam2',
                component: MyTeam2
            },
            { //账号与安全页面
                path: '/ID',
                name: 'ID',
                component: ID
            },
            { //积分赠送页面
                path: '/giving',
                name: 'giving',
                component: giving
            },
            { //积分赠送页面-确认订单
                path: '/giving2',
                name: 'giving2',
                component: giving2
            },
            { // 积分兑换
                path: '/IntegralDiscount',
                name: 'IntegralDiscount',
                component: IntegralDiscount
            },
            // { // 修改折扣
            //     path: '/zhekou',
            //     name: 'zhekou',
            //     component: zhekou
            // },
            { // 积分换购
                path: '/Redemption',
                name: 'Redemption',
                component: Redemption
            },
            { // 线下现金交易
                path: '/Offline',
                name: 'Offline',
                component: Offline
            },
            { // 收款码
                path: '/recevingCode',
                name: 'recevingCode',
                component: recevingCode
            },
            { //搜索
                path: '/search',
                name: 'search',
                component: search
            },
            { // 用户协议
                path: '/Agreement',
                name: 'Agreement',
                component: Agreement
            },
            { // 设置支付密码
                path: '/setpaypsd',
                name: 'setpaypsd',
                component: setpaypsd
            },
            { // 用户验证
                path: '/IDcard',
                name: 'IDcard',
                component: IDcard
            },
            { // 服务商
                path: '/Servershop',
                name: 'Servershop',
                component: Servershop
            },
            { // 服务商缴费
                path: '/Servershop2',
                name: 'Servershop2',
                component: Servershop2
            },
            { // 线下支付
                path: '/Xorders',
                name: 'Xorders',
                component: Xorders
            },
            { // 提现
                path: '/Cash',
                name: 'Cash',
                component: Cash
            },
            { // 扫码付
                path: '/grpay',
                name: 'grpay',
                component: grpay
            },
            { // 扫码付2
                path: '/Surepay',
                name: 'Surepay',
                component: Surepay
            },
            { // 修改头像
                path: '/Myhead',
                name: 'Myhead',
                component: Myhead
            },
            { // 实名认证
                path: '/Approve',
                name: 'Approve',
                component: Approve
            },
            { // 修改收货地址
                path: '/addressYes',
                name: 'addressYes',
                component: addressYes
            },
            { // 店铺搜索
                path: '/searchShop',
                name: 'searchShop',
                component: searchShop
            }
        ]
    },
]

// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
//     store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }

const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        console.log(this.$store.state.token)
        if (this.$store.state.token) {
            next();
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next();
    }
})

// router.afterEach((to,from,next)=>{
//   setTimeout(function () {
//     console.log('拦截');
// }, 0);
// })

export default router;
