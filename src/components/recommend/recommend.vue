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
        <list :data="homeRecommendPlaylistList"></list>
        <list :data="homeRecommendPlaylistList"></list>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider';
  import Scroll from 'base/scroll/scroll';
  import List from 'base/list/list';
  import Subnav from 'components/subnav/subnav';
  import axios from 'axios';
  export default {
    data() {
      return {
        picList: [],
        homeRecommendPlaylistList: {}
      };
    },
    created() {
      this._getRecommendPicList();
      this._getHomeRecommendPlaylistList();
    },
    components: {
      Slider, Subnav, Scroll, List
    },
    methods: {
      _getRecommendPicList() {
        axios.get('/api/getRecommendPicList').then((res) => {
          this.picList = res.data;
        });
      },
      _getHomeRecommendPlaylistList() {
        axios.get('/api/homepageData').then((res) => {
          this.homeRecommendPlaylistList = this._PlaylistFilter(res.data);
          this.refresh();
        });
      },
      _PlaylistFilter(data) {
        let ret = {
          title: '推荐歌单',
          list: []
        };
        data.data.HomeRecommend.data._list.forEach((items) => {
          items.forEach((item) => {
            ret.list.push(item);
          });
        });
        return ret;
      },
      refresh() {
        if (this.$refs.scroll) {
          this.$refs.scroll.refresh();
        }
      }
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

</style>
