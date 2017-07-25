<template>
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
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';
  export default {
    computed: {
      ...mapGetters([
        'playlist'
      ])
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
