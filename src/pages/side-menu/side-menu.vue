<template>
  <transition name="slid">
    <div class="side-menu">
      <div class="header"></div>
      <div class="content">
        <div class="item"></div>
      </div>
      <div class="footer">
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
    export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .slid-enter-active,.slid-leave-active
    transition all .5s
  .slid-enter,slid-leave
    transform translate3d(-100%,0,0)
  .side-menu
    position fixed
    z-index 1000
    top 0
    left 0
    width 80%
    height 100%
    overflow hidden
    background $color-background-l
</style>
