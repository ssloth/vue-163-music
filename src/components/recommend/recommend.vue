<template>
  <div class="recommend">

    <scroll ref="scroll" :data="mockData" class="recommend-content">
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
        <list :data="mockData"></list>
        <list :data="mockData"></list>
        <list :data="mockData"></list>
        <list :data="mockData"></list>
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
        mockData: {}
      };
    },
    created() {
      this._getRecommendPicList();
      this._getMockList();
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
      _getMockList() {
        axios.get('/api/getMockData').then((res) => {
          this.mockData = res.data;
          this.refresh();
        });
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
