import Vue from 'vue';
import Router from 'vue-router';
import Recommend from 'components/recommend/recommend';
import Radio from 'components/radio/radio';
import Rank from 'components/rank/rank';
import Playlist from 'components/playlist/playlist';
import Fm from 'components/fm/fm';
import HotRank from 'components/hotRank/hotRank';
import RecommendDaily from 'components/recommendDaily/recommendDaily';

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
        }, {
          path: '/recommend/recommendDaily',
          component: RecommendDaily
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
