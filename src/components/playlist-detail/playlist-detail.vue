<template>
  <transition name="slide">
    <div class="playlist-detail">
      <div class="fixed-header"></div>
      <div class="header-wrapper">
        <div class="intro">
          <div class="left">
            <div class="avatar"></div>
          </div>
          <div class="right">
            <div class="description"></div>
            <div class="creator">
              <div class="avatar">
                <img src="" alt="">
              </div>
              <div class="nickname"></div>
            </div>
          </div>
        </div>
        <div class="bar">
          <div class="subscribed"></div>
          <div class="comment"></div>
          <div class="share"></div>
          <div class="download"></div>
        </div>
      </div>
      <div class="song-list"></div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {ERR_OK} from 'api/config';
  import {mapGetters} from 'vuex';
  export default {
    data() {
      return {};
    },
    computed: {
      ...mapGetters([
        'playlist'
      ])
    },
    created() {
      this._getPlaylistDetail();
    },
    methods: {
      _getPlaylistDetail() {
        console.log(this.playlist);
        if (!this.playlist.id) {
          this.$router.push('/recommend');
          return;
        }
        this.$http.get(`http://music.163.com/api/playlist/detail?${this.playlist.id}`).then(res => {
          if (res.code === ERR_OK) {
            console.log(res.data);
          }
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable";
  .slide-enter-active,.slide-leave-active
    transition all 0.5
    opacity 1
  .slide-enter,.slider-leave-to
    transform translate3d(0,-100%,0)
    opacity 0.5

  .playlist-detail
    position fixed
    z-index 100
    top 0
    left 0
    width 100%
    height 100%
    background $color-background
</style>
