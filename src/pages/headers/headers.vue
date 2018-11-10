<template>
  <div class="headers">
    <div class="nav">
      <div @click="menu" class="side"><i class="fa fa-bars fa-lg"></i></div>
      <div class="center">
        <span class="item"><i class="fa fa-music fa-lg"></i></span>
        <span class="item"><i class="fa fa-pinterest fa-lg"></i></span>
        <span class="item"><i class="fa fa-group fa-lg"></i></span>
      </div>
      <div class="side"><i class="fa fa-search fa-lg"></i></div>
    </div>
    <div @click="menu" v-if="menuShow" class="side-menu-wrapper">
      <side-menu></side-menu>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import SideMenu from 'pages/side-menu/side-menu';
export default {
  data() {
    return {
      menuShow: false
    };
  },
  methods: {
    menu() {
      this.menuShow = !this.menuShow;
    }
  },
  components: {
    SideMenu
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

.headers {
  width: 100%;
  background: $color-background-l;

  .nav {
    display: flex;
    line-height: 50px;
    color: $color-text;
    text-align: center;

    .side {
      flex: 0 0 60px;
    }

    .center {
      flex: 1;

      .item {
        padding: 0 20px;
      }
    }
  }

  .side-menu-wrapper {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: $color-mask;
  }
}
</style>
