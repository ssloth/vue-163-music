import 'common/stylus/index.styl';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';
Vue.config.productionTip = false;
Vue.prototype.$http = axios.create({
  baseURL: 'http://music.163.com/',
  timeout: 1000
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
