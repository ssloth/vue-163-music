<template>
  <div class="player">
    <div class="normal-player">
      播放器
    </div>
    <div class="mini-player"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';
  export default {
    computed: {
      ...mapGetters([
        'playing',
        'fullScreen',
        'playlist',
        'randomPlaylist',
        'currentIndex',
        'mode'
      ])
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .player
    .normal-player
      position fixed
      left 0
      right 0
      top 0
      bottom 0
      z-index -100
</style>
