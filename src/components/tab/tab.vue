<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">个性推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/playlist">
      <span class="tab-link">歌单</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/radio">
      <span class="tab-link">主播电台</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行榜</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    display flex
    width 100%
    background $color-background
    font-size $font-size-medium
    line-height 30px
    .tab-item
      flex 1
      text-align center
      color $color-text
      .tab-link
        padding-bottom 2px
      &.router-link-active
        color $color-active
        border-bottom 2px solid $color-active
</style>
