<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper">
        <slider class="recommend-content">
          <div v-for="item in picList">
            <img :src="item.src" alt="">
          </div>
        </slider>
      </div>
      <div class="subnav-wrapper">
        <subnav></subnav>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider';
  import Subnav from 'components/subnav/subnav';
  import {getRecommendPicList} from 'api/homepage';
  export default {
    created() {
      this.picList = getRecommendPicList();
    },
    components: {
      Slider, Subnav
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
