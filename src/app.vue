<template>
  <div id="app">
    <headers></headers>
    <contents></contents>
    <footers></footers>
  </div>
</template>

<script type="text/ecmascript-6">
  import Headers from 'components/headers.vue';
  import Contents from 'components/contents.vue';
  import Footers from 'components/footers.vue';

  export default {
    components: {
      Headers, Contents, Footers
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
