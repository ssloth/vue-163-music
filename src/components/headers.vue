<template>
  <div class="header">
    <div class="nav">
      <div class="item left"><i class="fa fa-bars fa-lg"></i></div>
      <div class="item center">
        <span class="item"><i class="fa fa-music fa-lg"></i></span>
        <span class="item"><i class="fa fa-pinterest fa-lg"></i></span>
        <span class="item"><i class="fa fa-group fa-lg"></i></span>
      </div>
      <div class="item right"><i class="fa fa-search fa-lg"></i></div>
    </div>
    <div class="subnav">
        <router-link to="/recommend">个性推荐</router-link>
        <router-link to="/playlist">歌单</router-link>
        <router-link to="/radio">主播电台</router-link>
        <router-link to="/ranking">排行榜</router-link>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    position fixed
    top 0
    left 0
    width 100%
    background #111214
    .nav
      display flex
      .item
        line-height 60px
        color #727273
        &.left, &.right
          flex 0 0 60px
          text-align center
        &.center
          flex 1
          text-align center
          span
            padding 0 20px
    .subnav
      display flex
      font-size 15px
      text-align: center
      a
        flex 1
        padding 10px 0 15px 0
        &.router-link-active
          color #b62e2c
          border-bottom 3px solid rgb(182,46,44)
</style>
