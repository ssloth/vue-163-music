import Vue from 'vue';
import Router from 'vue-router';
import Recommend from 'pages/recommend/recommend';
import Radio from 'pages/radio/radio';
import Rank from 'pages/rank/rank';
import Playlist from 'pages/playlist/playlist';
import Fm from 'pages/fm/fm';
import HotRank from 'pages/hotrank/hotrank';
import RecommendDaily from 'pages/recommend-daily/recommend-daily';
import playlistDetail from 'pages/playlist-detail/playlist-detail';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: '/recommend/fm',
          component: Fm
        },
        {
          path: '/recommend/HotRank',
          component: HotRank
        },
        {
          path: '/recommend/recommend-daily',
          component: RecommendDaily
        },
        {
          path: ':id',
          component: playlistDetail
        }
      ]
    },
    {
      path: '/radio',
      component: Radio
    },
    {
      path: '/playlist',
      component: Playlist
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
});
