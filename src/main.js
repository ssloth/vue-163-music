import 'common/stylus/index.styl';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';
import lazy from 'vue-lazyload';
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.use(lazy, {
  preLoad: '1.3',
  loading: require('common/image/lazy.jpg')
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
