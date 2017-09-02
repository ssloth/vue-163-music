<template>
  <transition name="slider">
    <div class="playlist-detail">
      <div class="fixed-header">
        <div ref="fixedHeaderBackground" class="background">
          <img v-lazy="playlistDetail.coverImgUrl" width="100%" height="100%">
        </div>
        <div @click="back" class="back">
          <i class="icon-arrow-left"></i>
        </div>
        <div class="description">
          <h2 ref="marquee" class="title">歌单</h2>
          <span class="text">{{playlistDetail.description}}</span>
        </div>
        <div class="search"></div>
        <div class="menu"></div>
      </div>
      <scroll
        @scroll="scroll"
        ref="scroll"
        :listenScroll="listenScroll"
        :data="playlistDetail"
        :probeType="probeType"
      >
        <div class="header-wrapper">
          <div class="background">
            <img v-lazy="playlistDetail.coverImgUrl" width="100%" height="100%">
          </div>
          <div class="intro">
            <div class="left">
              <div class="coverImgUrl">
                <img v-lazy="playlistDetail.coverImgUrl" alt="" width="100%">
              </div>
            </div>
            <div class="right">
              <div class="name">
                {{playlistDetail.name}}
              </div>
              <div class="creator" v-if="playlistDetail.creator">
                <img class="avatar" v-lazy="playlistDetail.creator.avatarUrl" alt="" width="100">
                <span class="nickname">{{playlistDetail.creator.nickname}}
                  <i class="fa fa-angle-right fa-lg" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="bar">
            <div class="item">
              <i class="icon-collection"></i>
              <div>{{playlistDetail.subscribedCount}}</div>
            </div>
            <div class="item">
              <i class="icon-comments"></i>
              <div>{{playlistDetail.commentCount}}</div>
            </div>
            <div class="item">
              <i class="icon-share"></i>
              <div>{{playlistDetail.shareCount}}</div>
            </div>
            <div class="item">
              <i class="icon-download"></i>
              <div>下载</div>
            </div>
          </div>
        </div>
        <div class="song-list-wrapper">
          <div class="ctrl-bar">
            <div class="play-icon"><i class="icon-play"></i></div>
            <div v-if="playlistDetail.songs" class="text">播放全部共<span>({{playlistDetail.songs.length}})首</span></div>
            <div class="multi-select"></div>
          </div>
          <ul class="song-list" v-if="playlistDetail.songs">
            <li
              class="song"
              v-for="(song,index) in playlistDetail.songs"
              @click="selectItem(song,index)"
            >
              <div class="index">
                {{index+1}}
              </div>
              <div class="text">
                <div class="name">{{song.name}}</div>
                <div class="description">{{song.description}}</div>
              </div>
              <div class="ctrl">
                <i></i>
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
  import statusBar from 'base/status-bar/status-bar';
  import {createPlaylist} from 'common/js/playlist';
  import {ERR_OK} from 'api/config';
  import {mapGetters, mapActions} from 'vuex';
  const HEADER_HEIGHT = 200;
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
      scroll, statusBar
    },
    created() {
      this.listenScroll = true;
      this.probeType = 3;
      this._getPlaylistDetail();
    },
    methods: {
      scroll(pos) {
        this._headerAnimation(-pos.y);
      },
      refresh() {
        if (this.$refs.scroll) {
          this.$refs.scroll.refresh();
        }
      },
      selectItem(item, index) {
        this.selectPlay({
          list: this.playlistDetail.songs,
          index: index
        });
      },
      back() {
        this.$router.push('/recommend');
      },
      _headerAnimation(y) {
        if (y < 0) {
          this.$refs.fixedHeaderBackground.style.opacity = 0;
          return;
        }
        if (y > 0) {
          this.$refs.fixedHeaderBackground.style.opacity = y / HEADER_HEIGHT > 0.9 ? 1 : y / HEADER_HEIGHT;
          if (y > 20) {
            this.$refs.marquee.innerText = this.playlistDetail.name;
          } else {
            this.$refs.marquee.innerText = '歌单';
          }
        }
      },
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
      ...mapActions([
        'selectPlay'
      ])
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable";
  @import "~common/stylus/mixin";
  @keyframes lazy-animation {
    from {
      opacity 0
    }
    to {
      opacity 1
    }
  }
  img[lazy=loading]{
    animation lazy-animation 2s
  }
  img[lazy=loaded] {
    animation lazy-animation 2s
  }

  .playlist-detail
    position fixed
    z-index 100
    top 0
    left 0
    width 100%
    height 100%
    color $color-text-lll
    background $color-background
    .fixed-header
      position fixed
      display flex
      z-index 1000
      padding-top 10px
      top 0
      left 0
      width 100%
      height 40px
      overflow hidden
      .background
        position absolute
        z-index -1
        top -190px
        left 0
        height 250px
        width 100%
        opacity 0
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
          filter blur(50px)
      .back
        flex 40px 0 0
        font-size $font-size-large-x
        text-align center
        line-height 40px
      .description
        flex 1 0 0
        overflow hidden
        padding 5px 0
        .title
          font-size $font-size-medium-x
          line-height 20px
          text-ellipsis()
        .text
          font-size $font-size-small-s
          text-ellipsis()
      .search
        flex 40px 0 0
      .menu
        flex 40px 0 0
    .header-wrapper
      padding-top 60px
      width 100%
      .background
        position absolute
        overflow hidden
        top 0
        left 0
        width 100%
        height 250px
        z-index -1
        img
          opacity 0.8
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
            font-size $font-size-medium
          .creator
            display flex
            align-items center
            .avatar
              width 30px
              height 30px
              border-radius 50%
            .nickname
              font-size $font-size-small
              margin-left 10px
      .bar
        display flex
        padding 10px 0
        text-align center
        .item
          flex 1
          line-height 25px
          font-size $font-size-medium
          i
            font-size $font-size-large-x
    .song-list-wrapper
      color $color-text-ll
      .ctrl-bar
        display flex
        line-height 40px
        .play-icon
          text-align center
          flex 50px 0 0
        .text
          flex 1 0 0
          span
            color $color-text
        .multi-select
          line-height 40px
          flex 50px 0 0
      .song-list
        font-weight 200
        .song
          display flex
          align-items center
          .index
            flex 50px 0 0
            line-height 50px
            text-align center
          .text
            flex 1 0 0
            text-ellipsis()
            .name
              font-size $font-size-medium-x
              line-height 35px
            .description
              font-size $font-size-small
              color $color-text
              line-height 15px
          .ctrl
            flex 50px 0 0

  .slider-enter-active, .slider-leave-active
    transition all 0.2s
    opacity 1

  .slider-enter, .slider-leave-to
    transform translate3d(0, 100%, 0)
    opacity 0
</style>
