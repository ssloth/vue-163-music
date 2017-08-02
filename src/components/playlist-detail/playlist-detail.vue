<template>
  <transition name="slider">
    <div class="playlist-detail">
      <div class="fixed-header">
        <div class="back">
          <i class="fa fa-arrow-left"></i>
        </div>
        <div class="description">
          <h2 class="title">歌单</h2>
          <span class="text">{{playlistDetail.description}}</span>
        </div>
        <div class="search"></div>
        <div class="menu"></div>
      </div>
      <scroll ref="scroll" :listenScroll="listenScroll" :data="playlistDetail">
        <div class="header-wrapper">
          <div class="background">
            <img :src="playlistDetail.coverImgUrl" width="100%" height="100%">
          </div>
          <div class="intro">
            <div class="left">
              <div class="coverImgUrl">
                <img :src="playlistDetail.coverImgUrl" alt="" width="100%">
              </div>
            </div>
            <div class="right">
              <div class="name">
                {{playlistDetail.name}}
              </div>
              <div class="creator" v-if="playlistDetail.creator">
                <img class="avatar" :src="playlistDetail.creator.avatarUrl" alt="" width="100">
                <span class="nickname">{{playlistDetail.creator.nickname}} <i class="fa fa-angle-right fa-lg"
                                                                              aria-hidden="true"></i></span>
              </div>
            </div>
          </div>
          <div class="bar">
            <div class="item">
              <i class="fa fa-lg fa-download "></i>
              <div>{{playlistDetail.subscribedCount}}</div>
            </div>
            <div class="item">
              <i class="fa fa-lg fa-download "></i>
              <div>{{playlistDetail.commentCount}}</div>
            </div>
            <div class="item">
              <i class="fa fa-lg fa-download "></i>
              <div>{{playlistDetail.shareCount}}</div>
            </div>
            <div class="item">
              <i class="fa fa-lg fa-download "></i>
              <div>下载</div>
            </div>
          </div>
        </div>
        <div class="song-list-wrapper">
          <div class="ctrl-bar">
            <div class="play-icon"></div>
            <div v-if="playlistDetail.songs" class="text">播放全部共({{playlistDetail.songs.length}})首</div>
            <div class="multi-select"></div>
          </div>
          <ul class="song-list" v-if="playlistDetail.songs">
            <li class="song" v-for="(song,index) in playlistDetail.songs">
              <div class="index">
                {{index+1}}
              </div>
              <div class="text">
                <div class="name">{{song.name}}</div>
                <div class="description">{{song.description}}</div>
              </div>
            </li>
          </ul>
        </div>
      </scroll>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import scroll from 'base/scroll/scroll';
  import {createPlaylist} from 'common/js/playlist';
  import {ERR_OK} from 'api/config';
  import {mapGetters} from 'vuex';
  export default {
    data() {
      return {
        playlistDetail: {}
      };
    },
    computed: {
      ...mapGetters([
        'playlist'
      ])
    },
    components: {
      scroll
    },
    created() {
      setTimeout(() => {
        this.listenScroll = true;
        this._getPlaylistDetail();
      }, 50);
    },
    methods: {
      _getPlaylistDetail() {
        if (!this.playlist.id) {
          this.$router.push('/recommend');
          return;
        }
        this.$http.get(`/api/playlist/detail?id=${this.playlist.id}`).then(res => {
          res = res.data;
          console.log(res.code, ERR_OK);
          if (res.code === ERR_OK) {
            this.playlistDetail = createPlaylist(res.result);
            setTimeout(() => {
              this.refresh();
            }, 500);
          }
        });
      },
      refresh() {
        console.log(this.$refs.scroll);
        if (this.$refs.scroll) {
          this.$refs.scroll.refresh();
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable";
  @import "~common/stylus/mixin";
  .playlist-detail
    position fixed
    z-index 100
    top 0
    left 0
    width 100%
    height 100%
    color $color-text-ll
    background $color-background
    .fixed-header
      position fixed
      display flex
      top 0
      left 0
      width 100%
      padding 10px 0
      height 60px
      .back
        flex 40px 0 0
        text-align center
        line-height 40px
      .description
        flex 1 0 0
        overflow hidden
        .title
          line-height 25px
          font-size $font-size-medium
        .text
          height 10px
          line-height 10px
          font-size 8px
          text-ellipsis()
      .search
        flex 40px 0 0
      .menu
        flex 40px 0 0
    .header-wrapper
      padding-top 60px
      width 100%
      color $color-text-lll
      .background
        position absolute
        overflow hidden
        top 0
        left 0
        width 100%
        height 250px
        z-index -1
        img
          filter blur(50px)
      .intro
        padding 0 20px
        display flex
        align-items center
        .left
          flex 120px 0 0
        .right
          flex 1 0 0
          padding 0 20px
          .name
            padding-bottom 20px
            font-size $font-size-large
          .creator
            display flex
            align-items center
            .avatar
              width 30px
              height 30px
              border-radius 50%
            .nickname
              font-size $font-size-medium-x
              margin-left 10px
      .bar
        display flex
        padding 10px 0
        text-align center
        .item
          flex 1
          line-height 25px

    .song-list-wrapper
      .ctrl-bar
        display flex
        .play-icon
          line-height 40px
          text-align center
          flex 50px 0 0
        .text
          flex 1 0 0
        .multi-select
          line-height 40px
          flex 50px 0 0
      .song-list
        .song
          display flex
          .index
            line-height 40px
            text-align center
            flex 50px 0 0
          .text
            flex 1 0 0

  .slider-enter-active, .slider-leave-active
    transition all 0.2s
    opacity 1

  .slider-enter, .slider-leave-to
    transform translate3d(0, 100%, 0)
    opacity 0.5
</style>
