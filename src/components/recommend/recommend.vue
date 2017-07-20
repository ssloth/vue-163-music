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
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider';
  import {getRecommendPicList} from 'api/homepage';
  export default {
    created() {
      this.picList = getRecommendPicList();
    },
    components: {
      Slider
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'
  .recommend
    position fixed
    top 92px
    bottom 0
    width 100%
    .recommend-content
      height 100%
      overflow hidden
      .slider-wrapper
        position relative
        width 100%
        overflow hidden
      .recommend-list
        .list-title
          height 65px
          line-height 65px
          text-align center
          font-size $font-size-medium
          color $color-theme
        .item
          display flex
          box-sizing border-box
          align-items center
          padding 0 20px 20px 20px
          .icon
            flex 0 0 60px
            width 60px
            padding-right 20px
          .text
            display flex
            flex-direction column
            justify-content center
            flex 1
            line-height 20px
            overflow hidden
            font-size $font-size-medium
            .author
              margin-bottom 10px
              color $color-text
            .desc
              color $color-text-d

</style>
