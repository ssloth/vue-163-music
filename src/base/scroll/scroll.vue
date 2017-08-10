<template>
  <div class="scroll" ref="scroll">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  export default {
    props: {
      click: {
        type: Boolean,
        default: true
      },
      deceleration: {
        type: Number,
        default: 0.005
      },
      probeType: {
        type: Number,
        default: 1
      },
      data: {
        type: Object,
        default: function() {
          return {};
        }
      },
      list: {
        type: Array,
        default: null
      },

      listenScroll: {
        type: Boolean,
        default: false
      },
      scrollStart: {
        type: Boolean,
        default: false
      },
      scrollEnd: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      setTimeout(() => {
        this._initScroll();
      }, 20);
    },
    methods: {
      _initScroll() {
        if (!this.$refs.scroll) {
          return;
        }
        this.scroll = new BScroll(this.$refs.scroll, {
          click: this.click,
          probeType: this.probeType,
          deceleration: this.deceleration
        });
        if (this.listenScroll) {
          let me = this;
          this.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos);
          });
        }
        if (this.scrollStart) {
          let me = this;
          this.scroll.on('scrollStart', (pos) => {
            console.log(1);
            me.$emit('scrollStart', pos);
          });
        }
        if (this.scrollEnd) {
          let me = this;
          console.log(1);
          this.scroll.on('scrollEnd', (pos) => {
            console.log(1);
            me.$emit('scrollEnd', pos);
          });
        }
      },
      enable() {
        this.scroll && this.scroll.enable();
      },
      disable() {
        this.scroll && this.scroll.disable();
      },
      refresh() {
        this.scroll && this.scroll.refresh();
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
      }
    },
    watch: {
      list() {
        setTimeout(() => {
          this.refresh();
        }, 1000);
      },
      data() {
        setTimeout(() => {
          this.refresh();
        }, 1000);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .scroll
    overflow hidden
    height 100%
    width 100%
</style>
