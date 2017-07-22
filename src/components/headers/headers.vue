<template>
  <div class="headers">
    <div class="status-bar"></div>
    <div class="nav">
      <div class="side"><i class="fa fa-bars fa-lg"></i></div>
      <div class="center">
        <span class="item"><i class="fa fa-music fa-lg"></i></span>
        <span class="item"><i class="fa fa-pinterest fa-lg"></i></span>
        <span class="item"><i class="fa fa-group fa-lg"></i></span>
      </div>
      <div class="side"><i class="fa fa-search fa-lg"></i></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .headers
    width 100%
    background $color-background-l
    .status-bar
      height 10px
    .nav
      display flex
      line-height 50px
      color $color-text
      text-align center
      .side
        flex 0 0 60px
      .center
        flex 1
        .item
          padding 0 20px

</style>
