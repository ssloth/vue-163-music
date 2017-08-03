<!--suppress ALL -->
<template>
  <div id="app">
    <status-bar></status-bar>
    <headers></headers>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import Headers from 'components/headers/headers';
  import Tab from 'components/tab/tab';
  import statusBar from 'base/status-bar/status-bar.vue';

  export default {
    components: {
      Headers, Tab, statusBar
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
