import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'
import '@/assets/css/main.css'
import "normalize.css";
import axios from 'axios';
import './router/axios'

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
