// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './init/css/reset.css'
import axios  from  './helpers/client'
import animate from './init/css/animate.css'

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