// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery';
import 'bootstrap-jquery';
import './assets/plugins/jQuery/jQuery-2.1.3.min.js'
import './assets/bootstrap/js/bootstrap.min.js'
import './assets/plugins/iCheck/icheck.min.js'
import Login from '@/components/login'

import {
  store
} from './store/store'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  jQuery,
  store,
  router,
  template: '<App/>',
  components: { App, Login }
})
