<template>
  <div class="subnav">
    <router-link class="item" tag="div" to="/recommend/fm">
      <i class="icon-fm item-link"></i>
      <div class="text">私人FM</div>
    </router-link>
    <router-link class="item" tag="div" to="/recommend/recommendDaily">
      <i class="icon-recommend-card item-link"></i>
      <div class="text">每日歌曲推荐</div>
      <div class="today">{{today}}</div>
    </router-link>
    <router-link class="item" tag="div" to="/recommend/hotRank">
      <i class="icon-rank item-link"></i>
      <div class="text">云音乐热搜榜</div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {
      this.today = new Date().getDate();
      console.log(this.today);
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'
  .subnav
    width 100%
    display flex
    border-bottom 1px solid $color-background-l
    .item
      position relative
      flex 1
      text-align center
      height 100px
      .item-link
        width 100%
        line-height 80px
        font-size 25px
        color $color-text
        &:before
          position relative
          padding 12px
          border 2px solid $color-text
          border-radius 50%
      .text
        position relative
        top -5px
        font-size $font-size-small
      .today
        position absolute
        top 0
        left 0
        width 100%
        font-size $font-size-small
        text-align center
        line-height 88px
</style>
