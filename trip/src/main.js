// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mandMobile from 'mand-mobile' //使用mandMobile
import 'mand-mobile/lib/mand-mobile.css'
import store from './store/index'


Vue.use(mandMobile)
// 请求拦截器
import requestPlugin from './request/http.js'
Vue.use(requestPlugin)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
