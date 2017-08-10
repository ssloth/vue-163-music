<template>
  <div class="foot-list">
    <div class="background"></div>
    <div class="header">
      <div class="mode">
        单曲循环<span v-if="currentPlaylist.length">（{{currentPlaylist.length}}）</span>
      </div>
      <div class="collection">
        <i class="icon-collection"></i> 收藏
      </div>
      <div class="clear">
        <i class="icon-clear"></i> 清空
      </div>
    </div>
    <div class="list-wrapper">
      <scroll :list="currentPlaylist">
        <ul class="songs">
          <li
            class="song"
            v-for="(song,index) in currentPlaylist"
            @click="selectItem(song,index)"
          >
            <div class="text">
              <span class="name">{{song.name}}</span>
              <span class="description">-{{song.description}}</span>
            </div>
            <div class="ctrl">
              <i></i>
            </div>
          </li>
        </ul>
      </scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapActions} from 'vuex';
  import Scroll from 'base/scroll/scroll';
  export default {
    computed: {
      ...mapGetters([
        'currentPlaylist'
      ])
    },
    components: {
      Scroll
    },
    methods: {
      selectItem(item, index) {
        this.selectPlay({
          list: this.playlistDetail.songs,
          index: index
        });
      },
      ...mapActions([
        'selectPlay'
      ])
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .foot-list
    position fixed
    bottom 0
    height 300px
    width 100%
    z-index 120
    background $color-background
    .header
      display flex
      height 40px
      line-height 40px
      font-size $font-size-medium
      margin 0 15px
      .mode
        flex 1
      .collection
        flex 60px 0 0
        text-align center
      .clear
        flex 60px 0 0
        text-align center
    .list-wrapper
      color $color-text-l
      overflow hidden
      height 100%
      .song
        display flex
        align-items center
        margin 0 15px
        border-bottom 1px solid $color-background-l
        .text
          flex 1 0 0
          text-ellipsis()
          .name
            font-size $font-size-medium
            color $color-text-ll
            line-height 35px
          .description
            font-size $font-size-small-s
            color $color-text
            line-height 15px
        .ctrl
          flex 50px 0 0
</style>
