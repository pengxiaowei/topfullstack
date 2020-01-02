import Vue from 'vue'
import './plugins/element'
import './plugins/avue'
import App from './App.vue'

import axios from 'axios'
import router from './router'

// import EleForm from 'vue-ele-form'
// // 注册 vue-ele-form
// Vue.use(EleForm)

Vue.config.productionTip = false

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})
Vue.prototype.$httpajax = http  //给avue上传使用的
Vue.prototype.$http = http    //给平时请求接口使用的


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
