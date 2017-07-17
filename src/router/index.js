import Vue from 'vue';
import Router from 'vue-router';
import recommend from 'components/recommend/recommend';
import radio from 'components/radio/radio';
import rank from 'components/rank/rank';
import playlist from 'components/playlist/playlist';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/radio',
      component: radio
    },
    {
      path: '/playlist',
      component: playlist
    },
    {
      path: '/rank',
      component: rank
    }
  ]
});
