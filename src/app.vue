<!--suppress ALL -->
<template>
  <div id="app">
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

  export default {
    components: {
      Headers, Tab
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
