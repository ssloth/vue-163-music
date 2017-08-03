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
      listenScroll: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      setTimeout(() => {
        this._initScroll();
      }, 200);
    },
    methods: {
      _initScroll() {
        if (!this.$refs.scroll) {
          return;
        }
        this.scroll = new BScroll(this.$refs.scroll, {
          click: this.click,
          probeType: this.probeType
        });
        if (this.listenScroll) {
          let me = this;
          this.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos);
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
        console.log(this.scroll);
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
      data() {
        this.refresh();
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .scroll
    overflow hidden
    height 100%
</style>
