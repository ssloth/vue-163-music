<!--suppress ALL -->
<template>
  <div id="app">
    <status-bar></status-bar>
    <headers></headers>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
import Headers from 'pages/headers/headers';
import Tab from 'pages/tab/tab';
import Player from 'pages/player/player';
import StatusBar from 'base/status-bar/status-bar';

export default {
  components: {
    Headers,
    Tab,
    StatusBar,
    Player
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
