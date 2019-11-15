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

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3002'
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
