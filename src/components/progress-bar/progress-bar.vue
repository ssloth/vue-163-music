<template>
  <div class="progress-bar">
    <div class="current-date">1:00</div>
    <div class="bar-wrapper" ref="bar" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
      <div class="progress">
        <div class="progress-dot"></div>
      </div>
    </div>
    <div class="total-date">2:00</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {
      this.pageWidth = window.outerWidth;
      console.log(this.pageWidth);
    },
    methods: {
      touchstart({touches}) {
        let local = touches[0].target;
        console.log(1, local.offsetWidth);
      },
      touchmove({touches}) {
        let local = touches[0].pageX;
        console.log(1, local);
      },
      touchend({touches}) {
        console.log(this.bar);
      },
      _getDotLocal(x) {

      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .progress-bar
    margin 0 auto;
    width 90%
    display flex
    align-items center
    .current-date, .total-date
      flex 40px 0 0
      color #FFF
      text-align center
      font-size $font-size-medium
    .bar-wrapper
      flex 1
      position relative
      height 2px
      background rgba(255, 255, 255, .5)
      .progress
        position absolute
        top 0
        left 0
        z-index 10
        width 40%
        height 2px
        background $color-active
      .progress-dot
        content ""
        position absolute
        top 0
        right 0
        transform translate3d(50%, -50%, 0)
        display block
        height 15px
        width 15px
        border-radius 50%
        background #f0f0f0
        z-index 11

</style>
