import Vue from 'vue'
import Router from 'vue-router'

const HomePage = () => import(/* webpackChunkName: "HomePage" */ '@/components/HomePage')
const Classify = () => import(/* webpackChunkName: "Classify" */ '@/components/Classify') //分类
const Shopping = () => import(/* webpackChunkName: "Shopping" */ '@/components/Shopping') 
const Mine = () => import(/* webpackChunkName: "Mine" */ '@/components/Mine') 

const city = r => require.ensure( [], () => r (require('@/components/main/city')));
const search = r => require.ensure( [], () => r (require('@/components/search')));
const RemainingSum = r => require.ensure( [], () => r (require('@/components/MineList/RemainingSum.vue')));
const Stamps = r => require.ensure( [], () => r (require('@/components/MineList/Stamps.vue')));
const myQRCode = r => require.ensure( [], () => r (require('@/components/myQRCode')));
const Information = r => require.ensure( [], () => r (require('@/components/MineList/Information.vue')));
const NickName = r => require.ensure( [], () => r (require('@/components/MineList/NickName.vue')));
const MyAddress = r => require.ensure( [], () => r (require('@/components/MineList/MyAddress.vue')));
const AddAddress = r => require.ensure( [], () => r (require('@/components/MineList/AddAddress.vue')));
const MyTeam = r => require.ensure( [], () => r (require('@/components/MineList/MyTeam.vue')));
const ID = r => require.ensure( [], () => r (require('@/components/MineList/ID.vue')));
const Integral = r => require.ensure( [], () => r (require('@/components/MineList/Integral.vue')));
const SellerCenter = r => require.ensure( [], () => r (require('@/components/MineList/SellerCenter')));
const OrdinaryBusiness = r => require.ensure( [], () => r (require('@/components/MineList/OrdinaryBusiness.vue')));
const Appreciation = r => require.ensure( [], () => r (require('@/components/MineList/Appreciation.vue')));
const MerchantsPayCost = r => require.ensure( [], () => r (require('@/components/MineList/MerchantsPayCost.vue')));
const CreditCard = r => require.ensure( [], () => r (require('@/components/MineList/CreditCard.vue')));
const CreditCardOK = r => require.ensure( [], () => r (require('@/components/MineList/CreditCardOK.vue')));
const Collection = r => require.ensure( [], () => r (require('@/components/Sher/Collection.vue')));
const IndentAll = r => require.ensure( [], () => r (require('@/components/PageAll/IndentAll.vue')));
const DetailsTwo = r => require.ensure( [], () => r (require('@/components/PageAll/DetailsTwo.vue')));
const giving = r => require.ensure( [], () => r (require('@/components/Sher/Giving.vue')));
const giving2 = r => require.ensure( [], () => r (require('@/components/Sher/Giving2.vue')));
const IntegralDiscount = r => require.ensure( [], () => r (require('@/components/IntegralDiscount/IntegralDiscount.vue')));
const Redemption = r => require.ensure( [], () => r (require('@/components/redemption/Redemption.vue')));
const ShareResults = r => require.ensure( [], () => r (require('@/components/MineList/ShareResults.vue')));
const Pay = r => require.ensure( [], () => r (require('@/components/MineList/Pay.vue')));
const News = r => require.ensure( [], () => r (require('@/components/main/News.vue')));
const setpaypsd = r => require.ensure( [], () => r (require('@/components/My/paypsd.vue')));
const IDcard = r => require.ensure( [], () => r (require('@/components/My/IDcard.vue')));
const Myhead = r => require.ensure( [], () => r (require('@/components/MineList/Myhead.vue')));
const addressYes = r => require.ensure( [], () => r (require('@/components/MineList/addressYes.vue'))); // 修改收货地址
const Approve = r => require.ensure( [], () => r (require('@/components/MineList/Approve.vue')));//实名认证
const ConfirmAnOrder = r => require.ensure( [], () => r (require('@/components/Shopping/ConfirmAnOrder.vue')));
const ConfirmAnOrderChild = r => require.ensure( [], () => r (require('@/components/Shopping/ConfirmAnOrderChild.vue')));
const Login = r => require.ensure( [], () => r (require('@/components/Login/Login.vue')));
const Register = r => require.ensure( [], () => r (require('@/components/Login/Register.vue')));
const SetPsd = r => require.ensure( [], () => r (require('@/components/Login/SetPsd.vue')));
const ChangePsd = r => require.ensure( [], () => r (require('@/components/Login/Changepsd.vue')));
const ChangePsd2 = r => require.ensure( [], () => r (require('@/components/Login/Changepsd2.vue')));
const ClassifySearch = r => require.ensure( [], () => r (require('@/components/PageAll/ClassifySearch.vue')));
const PageAll = r => require.ensure( [], () => r (require('@/components/PageAll/PageAll.vue')));
const PageDetails = r => require.ensure( [], () => r (require('@/components/PageAll/PageDetails.vue')));
const PageDetailsChild = r => require.ensure( [], () => r (require('@/components/PageAll/PageDetailsChild.vue')));
const Product = r => require.ensure( [], () => r (require('@/components/PageAll/Product.vue')));
const RegisterNew = r => require.ensure( [], () => r (require('@/components/Login/RegisterNew.vue')));
const sunorder = r => require.ensure( [], () => r (require('@/components/Sher/Sunorder.vue')));
const top = r => require.ensure( [], () => r (require('@/components/Sher/Topup.vue')));
const Offline = r => require.ensure( [], () => r (require('@/components/Sher/Offline.vue')));
const Agreement = r => require.ensure( [], () => r (require('@/components/Sher/Agreement.vue')));
const Servershop = r => require.ensure( [], () => r (require('@/components/MineList/Servershop.vue')));      //服务商首页
const Servershop2 = r => require.ensure( [], () => r (require('@/components/MineList/servershop2.vue')));    //支付服务商两万元
const Xorders = r => require.ensure([], () => r(require('@/components/MineList/Xorders.vue'))); //线下订单
const Cash = r => require.ensure([], () => r(require('@/components/MineList/Cash.vue'))); //提现
const recevingCode = r => require.ensure([], () => r(require('@/components/MineList/recevingCode.vue'))); // 收款码
const grpay = r => require.ensure([], () => r(require('@/components/main/Grpay.vue'))); //扫码付
const Surepay = r => require.ensure([], () => r(require('@/components/main/Surepay.vue'))); //扫码付2

Vue.use(Router)

const router = new Router({
  routes: [
	  { path: '/HomePage', name: 'HomePage', component: HomePage }, //首页页面
	  { path: '/Classify', name: 'Classify', component: Classify }, //分类页面
	  { path: '/city', name: 'city', component: city }, //city
	  { path: '/Shopping', name: 'Shopping', component: Shopping }, //购物车页面
	  { path: '/Mine', name: 'Mine', component: Mine }, //我的页面
	  { path: '/myQRCode', name: 'myQRCode', component: myQRCode },  //中间部分
	  { path: '/Information', name: 'Information', component: Information },  //个人信息页面
	  { path: '/ShareResults', name: 'ShareResults', component: ShareResults },  //分享业绩页面
	  { path: '/News', name: 'News', component: News },  //消息页面
	  { path: '/CreditCard', name: 'CreditCard', component: CreditCard },  //消费支付页面
	  { path: '/Pay', name: 'Pay', component: Pay }, //支付方式
	  { path: '/CreditCardOK', name: 'CreditCardOK', component: CreditCardOK },  //消费支付页面确认
	  { path: '/ConfirmAnOrder', name: 'ConfirmAnOrder', component: ConfirmAnOrder },  //确认订单
	  { path: '/Login', name: 'Login', component: Login },  //登陆页面
	  { path: '/Register', name: 'Register', component: Register },  //验证码
	  { path: '/RegisterNew', name: 'RegisterNew', component: RegisterNew },  //验证码
	  { path: '/SetPsd', name: 'SetPsd', component: SetPsd }, //设置密码
	  { path: '/ChangePsd', name: 'ChangePsd', component: ChangePsd },  //设置密码
	  { path: '/ChangePsd2', name: 'ChangePsd2', component: ChangePsd2 },  //验证码
	  { path: '/ClassifySearch', name: 'ClassifySearch', component: ClassifySearch },  //
	  { path: '/DetailsTwo', name: 'DetailsTwo', component: DetailsTwo },  //商品清单
	  { path: '/IndentAll', name: 'IndentAll', component: IndentAll },  //全部订单
	  { path: '/PageAll', name: 'PageAll', component: PageAll },  //
	  { path: '/PageDetails', name: 'PageDetails', component: PageDetails },  //
	  { path: '/PageDetailsChild', name: 'PageDetailsChild', component: PageDetailsChild },  //
	  { path: '/Product', name: 'Product', component: Product },  //
	  { path: '/Collection', name: 'Collection', component: Collection },  // 我的收藏
	  { path: '/sunorder', name: 'sunorder', component: sunorder },  //
	  { path: '/top', name: 'top', component: top },  //
	  { path: '/ConfirmAnOrderChild', name: 'ConfirmAnOrderChild', component: ConfirmAnOrderChild },  //
	  { path: '/MerchantsPayCost', name: 'MerchantsPayCost', component: MerchantsPayCost },  // 商家平台使用缴纳
	  { path: '/NickName', name: 'NickName', component: NickName },  //修改昵称
	  { path: '/RemainingSum', name: 'RemainingSum', component: RemainingSum },  //余额
	  { path: '/Stamps', name: 'Stamps', component: Stamps },  //贡融券
	  { path: '/Integral', name: 'Integral', component: Integral },  //贡融积分
	  { path: '/OrdinaryBusiness', name: 'OrdinaryBusiness', component: OrdinaryBusiness },  //申请成为商家
	  { path: '/SellerCenter', name: 'SellerCenter', component: SellerCenter },  // 商户中心
	  { path: '/Appreciation', name: 'Appreciation', component: Appreciation },  //申请成为商家
	  { path: '/MyAddress', name: 'MyAddress', component: MyAddress },  //我的地址
	  { path: '/MyTeam', name: 'MyTeam', component: MyTeam },  //编辑我的地址
	  { path: '/ID', name: 'ID', component: ID },  //账号与安全页面
	  { path: '/giving', name: 'giving', component: giving },  //积分赠送页面
	  { path: '/giving2', name: 'giving2', component: giving2 },  //积分赠送页面-确认订单
	  { path: '/IntegralDiscount', name: 'IntegralDiscount', component: IntegralDiscount },  // 积分兑换
	  { path: '/Redemption', name: 'Redemption', component: Redemption },  // 积分换购
	  { path: '/Offline', name: 'Offline', component: Offline },  // 线下现金交易
	  { path: '/recevingCode', name: 'recevingCode', component: recevingCode },  // 收款码
	  { path: '/search', name: 'search', component: search },  //搜索
	  { path: '/Agreement', name: 'Agreement', component: Agreement },  //用户协议
	  { path: '/setpaypsd', name: 'setpaypsd', component: setpaypsd },  //设置支付密码
	  { path: '/IDcard', name: 'IDcard', component: IDcard },  //用户验证
	  { path: '/Servershop', name: 'Servershop', component: Servershop },  //服务商
	  { path: '/Servershop2', name: 'Servershop2', component: Servershop2 },  //服务商缴费
	  { path: '/Xorders', name: 'Xorders', component: Xorders },  //线下支付
	  { path: '/Cash', name: 'Cash', component: Cash },  //提现
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
            }
    ]
})

// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
//     store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }

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
