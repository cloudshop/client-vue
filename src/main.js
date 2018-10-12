// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './init/css/reset.css'
import axios  from  './helpers/client'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
import './init/css/font-awesome.min.css'
import bus from './plugin/bus';
import $ from 'jquery'
import './init/font/iconfont.css'
import animate from './init/css/animate.css'
//import 'element-ui/lib/theme-chalk/index.css'
//import { Upload } from 'element-ui'

Vue.use(bus)
Vue.use(MintUI)
Vue.use(animate)
//Vue.use(Upload)

import Vuex from 'vuex'
Vue.use(Vuex)

import storePlugin from './storePlugin'
Vue.use(storePlugin)

Vue.config.productionTip = false;
axios.defaults.withCredentials=false;

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  router,
  axios,
  template: '<App/>',
  components: { App }
})
