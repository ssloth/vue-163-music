<template>
  <div class="recommend">
    <scroll ref="scroll" :data="homeRecommendPlaylistList" class="recommend-content">
      <div v-if="picList" class="slider-wrapper">
        <slider class="recommend-content">
          <div v-for="item in picList">
            <img :src="item.src" alt="">
          </div>
        </slider>
      </div>
      <div class="subnav-wrapper">
        <subnav></subnav>
      </div>
      <div class="list-wrapper">
        <list :data="homeRecommendPlaylistList" @select="selectPlaylist"></list>
        <list :data="privatecontent" @select="selectPlaylist"></list>
        <list :data="latestPlaylistList" @select="selectPlaylist"></list>
        <list :data="homeRecommendMV" @select="selectPlaylist"></list>
        <list :data="anchorRadio" @select="selectPlaylist"></list>

      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider';
  import Scroll from 'base/scroll/scroll';
  import List from 'base/list/list';
  import Subnav from 'components/subnav/subnav';
  import {mapMutations} from 'vuex';
  export default {
    data() {
      return {
        picList: [],
        homeRecommendPlaylistList: {},
        latestPlaylistList: {},
        homeRecommendMV: {},
        anchorRadio: {},
        privatecontent: {}
      };
    },
    created() {
      this._getRecommendPicList();
      this._getHomeRecommendPlaylistList();
      this._getLatestPlaylistList();
      this._getPrivatecontent();
      this._getHomeRecommendMV();
      this._getAnchorRadio();
      this.$nextTick(() => {
        setTimeout(() => {
          this.refresh();
        }, 2000);
      });
    },
    components: {
      Slider, Subnav, Scroll, List
    },
    methods: {
      selectPlaylist(playlist) {
        this.$router.push({
          path: `/recommend/${playlist.id}`
        });
        this.setPlaylist(playlist);
      },
      _getRecommendPicList() {
        this.$http.get('/api163/getRecommendPicList').then((res) => {
          this.picList = res.data;
        });
      },
      _getHomeRecommendPlaylistList() {
        this.$http.get('/newapi/personalized').then((res) => {
          this.homeRecommendPlaylistList = this._PlaylistFilter('推荐歌单', res.data);
        });
      },
      _getLatestPlaylistList() {
        this.$http.get('/newapi/personalized/newsong').then((res) => {
          this.latestPlaylistList = this._PlaylistFilter('最新音乐', res.data);
        });
      },
      _getHomeRecommendMV() {
        this.$http.get('/newapi/personalized/mv').then((res) => {
          this.homeRecommendMV = this._PlaylistFilter('推荐MV', res.data, 2);
        });
      },
      _getAnchorRadio() {
        this.$http.get('/newapi/personalized/djprogram').then((res) => {
          this.anchorRadio = this._PlaylistFilter('主播电台', res.data);
        });
      },
      _getPrivatecontent() {
        this.$http.get('/newapi/personalized/privatecontent').then((res) => {
          this.privatecontent = this._PlaylistFilter('独家放送', res.data);
        });
      },
      _PlaylistFilter(title, data, size = 3) {
        let ret = {
          title: title,
          list: []
        };
        if (data.result.length % 2 !== 0) {
          for (var i = 0; i < data.result.length - 1; i++) {
            data.result[i].size = 2;
            ret.list.push(data.result[i]);
          }
          data.result[i].size = 1;
          ret.list.push(data.result[i]);
          return ret;
        }
        data.result.forEach((item) => {
          item.size = size;
          ret.list.push(item);
        });
        return ret;
      },
      refresh() {
        if (this.$refs.scroll) {
          this.$refs.scroll.refresh();
        }
      },
      ...mapMutations({
        setPlaylist: 'SET_PLAYLIST'
      })
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'
  .recommend
    position fixed
    top 97px
    bottom 0
    width 100%
    .recommend-content
      height 100%
      overflow hidden
      .slider-wrapper
        position relative
        width 100%
        overflow hidden
      .subnav-wrapper
        width 100%
      .list-wrapper
        padding-bottom 50px

</style>
