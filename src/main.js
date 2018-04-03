// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './init/css/reset.css'
import axios  from  'axios' 
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './init/css/font-awesome.min.css'
// import './mock/index.js'
import store from './store/'
import bus from './plugin/bus';
import $ from 'jquery'
import './init/font/iconfont.css'
import animate from 'animate.css'
// import  './plugin/SmsApi.js'
import './plugin/VerifyApi.js'


Vue.use(bus)
Vue.use(MintUI)
Vue.use(animate)
Vue.use(ElementUI)

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
