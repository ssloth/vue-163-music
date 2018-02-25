<template>
  <div class="progress-bar">
    <div class="current-date">{{currentTime|dataFormat}}</div>
    <div class="bar-wrapper" ref="bar" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
      <div class="progress" :style="progressStyle">
        <div class="progress-dot"></div>
      </div>
    </div>
    <div class="total-date">{{totalTime|dataFormat}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      touch: {}
    };
  },
  props: ['currentTime', 'totalTime'],
  created() {
    this.pageWidth = window.outerWidth;
  },
  computed: {
    progressStyle() {
      return { width: this.currentTime * 100 / this.totalTime + '%' };
    }
  },
  methods: {
    touchstart({ touches }) {
      this.touch.begin = touches[0].target;
    },
    touchmove({ touches }) {
      // let local = touches[0].pageX;
    },
    touchend({ touches }) {
      this.touch.end = this.$refs.bar.clientWidth;
    },
    _getDotLocal(x) { }
  },
  filters: {
    dataFormat(date) {
      let m = parseInt(date / 60);
      let s = parseInt(date % 60);
      m = m.toString().length > 1 ? m : '0' + m.toString();
      s = s.toString().length > 1 ? s : '0' + s.toString();
      return m + ':' + s;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

.progress-bar {
  margin: 0 auto;
  width: 95%;
  display: flex;
  align-items: center;

  .current-date, .total-date {
    flex: 40px 0 0;
    color: #FFF;
    text-align: center;
    font-size: $font-size-medium;
  }

  .bar-wrapper {
    flex: 1;
    margin: 0 7.5px;
    position: relative;
    height: 2px;
    background: rgba(255, 255, 255, 0.5);

    .progress {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      height: 2px;
      background: $color-active;
    }

    .progress-dot {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      transform: translate3d(100%, -50%, 0);
      display: block;
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background: #f0f0f0;
      z-index: 11;
    }
  }
}
</style>
