<template>

  <div class="player">
    <transition name="normal">
      <div v-show="fullScreen" class="normal-player">
        <div class="background">
          <img width="100%" height="100%" :src="songDetail.albumBlurPicUrl" alt="">
        </div>
        <div class="header">
          <div class="back">
            <i class="fa fa-arrow-left"></i>
          </div>
          <div class="description">
            <h2 class="title">{{songDetail.name}}</h2>
            <span class="text">{{songDetail.artists}}</span>
          </div>
        </div>
        <div class="content">
          <div class="content-wrapper">
            <div class="cd-wrapper">
              <div class="cd">
                <img :src="songDetail.albumBlurPicUrl" alt="" class="image">
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="operators">

          </div>
        </div>
      </div>
    </transition>
    <transition name="mini">
      <div v-show="!fullScreen" class="mini-player">
        <div class="img-wrapper">
          <img :src="songDetail.albumBlurPicUrl" alt="" width="100%" height="100%">
        </div>
        <div class="text">
          <div class="name">{{song.name}}</div>
          <div class="tip">横滑可以切换上下首奥</div>
        </div>
        <div class="control">
          <i class="fa fa-play-circle-o fa-lg"></i>
          <i class="fa fa-list fa-lg"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import {ERR_OK} from 'api/config';
  import {mapGetters} from 'vuex';
  import {createSong} from 'common/js/song';
  export default {
    props: {},
    created() {

    },
    data() {
      return {
        songDetail: {}
      };
    },
    methods: {
      _getSongDetail() {
        this.$http
          .get(`/api/song/detail/?id=${this.song.id}&ids=[${this.song.id}]`)
          .then((res) => {
            res = res.data;
            if (res.code === ERR_OK && res.songs.length > 0) {
              this.songDetail = createSong(res.songs[0]);
            }
          });
      }
    },
    computed: {
      ...mapGetters([
        'playing',
        'fullScreen',
        'playlist',
        'randomPlaylist',
        'currentIndex',
        'mode',
        'song'
      ])
    },
    watch: {
      currentIndex() {
        console.log(1);
        this._getSongDetail();
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .player
    background $color-background-l
    .normal-player
      position fixed
      left 0
      right 0
      top 0
      bottom 0
      z-index 1
      .background
        position fixed
        z-index -1
        top 0
        left 0
        height 100%
        width 100%
        overflow hidden
        &:after
          position absolute
          content ""
          display block
          top 0
          width 100%
          height 100%
          background rgba(0, 0, 0, 1)
          z-index -2
        img
          filter blur(100px)
      .header
        display flex
        height 50px
        width 100%
        .back
          flex 40px 0 0
          text-align center
          line-height 40px
        .description
          flex 1 0 0
          overflow hidden
          padding 10px 0
          .title
            font-size $font-size-medium-x
            line-height 20px
            text-ellipsis()
          .text
            font-size $font-size-small-s
            text-ellipsis()
      .content
        height 100%
        display flex
        .content-wrapper
          align-items center
          .cd-wrapper
            margin 0 auto
            width 80%
            .cd
              img
                width 100%
                border-radius 50%
    .mini-player
      position fixed
      display flex
      left 0
      right 0
      bottom -1px
      height 50px
      width 100%
      background $color-background
      z-index 100
      .img-wrapper
        flex 50px 0 0
        box-sizing border-box
        height 100%
        padding 5px
      .text
        flex 1
        padding-left 10px
        .name
          color $color-text-lll
          font-size $font-size-medium
          line-height 30px
        .tip
          font-size $font-size-small-s
      .control
        display flex
        flex 100px 0 0
        font-size $font-size-large-x
        text-align center
        i
          line-height 50px
          flex 1

  .slider-enter-active, .slider-leave-active
    transition all 0.2s
    opacity 1

  .slider-enter, .slider-leave-to
    transform translate3d(0, 100%, 0)
    opacity 0
</style>
