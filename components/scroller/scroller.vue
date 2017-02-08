<template>
  <div
    class="mn-scroller"
    :class="{ 'is-save': save, 'is-bar': scrollbar }"
    @touchstart="touchStart"
    @touchmove="touchMove">
    <div class="mn-scroller-contents">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mn-scroller',
    props: {
      save: {
        type: Boolean,
        default: false
      },
      scrollbar: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      touchStart (event) {
        this.startPageY = event.touches[0].pageY
        this.startPageX = event.touches[0].pageX
      },
      touchMove (event) {
        let pageY = event.touches[0].pageY
        let scrollTop = this.$el.scrollTop
        let scrollHeight = this.$el.scrollHeight
        let containerHeight = this.$el.offsetHeight

        // 允许侧边栏手势进行返回
        if (this.startPageX > 16) {
          // 上面露底
          if (pageY > this.startPageY && scrollTop <= 0) {
            event.preventDefault()
          }

          // 下面露底
          if (pageY < this.startPageY && scrollTop >= scrollHeight - containerHeight) {
            event.preventDefault()
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .mn-scroller {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    // &-contents {
    // }

    &.is-x {
      position: relative;
      overflow: hidden;
      overflow-x: auto;
    }
  }

  .is-windows {
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    .mn-scroller.is-bar {
      &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }

      &::-webkit-scrollbar-track {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.6);
      }

      &::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.2);
      }
    }
  }
</style>
