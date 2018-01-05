<template>
  <div class="mn-swipe" ref="swipe">
    <div class="mn-swipe-content" ref="swipeGroup">
      <!-- Swipe contexts -->
      <slot></slot>
    </div>
    <slot name="indicators" v-if="hasDots">
      <div class="mn-swipe-indicators">
        <div class="mn-swipe-indicator"
          v-for="(item, $index) in dots"
          v-bind:key="$index"
          :class="{ 'is-active': $index === currentPageIndex}" ></div>
      </div>
    </slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'mn-swipe',
  props: {
    /**
     * Swipe dots switch
    */
    hasDots: {
      type: Boolean,
      default: true
    },
    /**
     * Slot v-for items
    */
    repeatItem: {
      type: Array
    },
    /**
     * Swipe start index
     */
    startIndex: {
      type: Number,
      default: 0
    },
    /**
     * Swipe infinite loop
     */
    loop: {
      type: Boolean,
      default: true
    },
    /**
     * Swipe auto play
    */
    autoPlay: {
      type: Boolean,
      default: true
    },
    /**
     * Swipe auto play interval
    */
    interval: {
      type: Number,
      default: 4000
    },
    /**
     * Swipe threshold is about the distance exceeded
    */
    threshold: {
      type: Number,
      default: 0.3
    },
    /**
     * Swipe play animate speed
    */
    speed: {
      type: Number,
      default: 400
    },
    /**
     * Swipe scroll end callback function
    */
    scrollEndFn: {
      type: Function,
      default: function() {}
    },
    /**
     * Swipe scroll start callback function
    */
    scrollStartFn: {
      type: Function,
      default: function() {}
    },
    /**
     * Swipe scroll before start
    */
    beforeScrollStartFn: {
      type: Function,
      default: function() {}
    }
  },
  watch: {
    repeatItem() {
      this.refresh()
    }
  },
  data() {
    return {
      dots: 0,
      timer: null,
      resizeTimer: null,
      currentPageIndex: this.startIndex || 0,
      scrollOption: {
        scrollX: true,
        scrollY: false,
        momentum: false,
        tap: false,
        bounce: false,
        snap: {
          loop: this.loop,
          threshold: this.threshold,
          speed: this.speed
        },
        click: true,
        observeDOM: false
      }
    }
  },
  methods: {
    /**
     * After DOM changed,Swipe instance need to destory and renew.
     * @public
     * @return {this}
    */
    refresh() {
      this.swipe && this.swipe.destroy()
      clearTimeout(this.timer)
      this.$nextTick(() => {
        this.initMethod()
      })
      return this
    },
    initMethod() {
      this.dots = 0
      this.setSwipeWidth(false)
      this.initDots()
      this.initSwipe()
      if (this.autoPlay) {
        this.play()
      }
    },
    touchEndEvent() {
      if (this.autoPlay) {
        this.play()
      }
    },
    setSwipeWidth() {
      this.children = this.$refs.swipeGroup.children
      let width = 0
      let swipeWidth = this.$refs.swipe.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        child.style.width = swipeWidth + 'px'
        width += swipeWidth
      }
      if (this.loop) {
        width += 2 * swipeWidth
      }
      this.$refs.swipeGroup.style.width = width + 'px'
    },
    initSwipe() {
      this.swipe = new BScroll(this.$refs.swipe, this.scrollOption)

      this.swipe.goToPage(this.currentPageIndex, 0, 0)

      this.swipe.on('scrollEnd', this.onScrollEnd)

      window.removeEventListener('touchend', this.touchEndEvent, false)

      window.addEventListener('touchend', this.touchEndEvent, false)

      this.swipe.on('scrollEnd', () => {
        this.scrollEndFn()
      })
      this.swipe.on('scrollStart', () => {
        this.scrollStartFn()
      })
      this.swipe.on('beforeScrollStart', () => {
        this.beforeScrollStartFn()
      })
      this.swipe.on('beforeScrollStart', () => {
        if (this.autoPlay) {
          clearTimeout(this.timer)
        }
      })
    },
    updatePageIndex() {
      const pageIndex = this.swipe.getCurrentPage().pageX
      if (this.currentPageIndex !== pageIndex) {
        this.currentPageIndex = pageIndex
        this.$emit('change', this.currentPageIndex)
      }
      if (this.autoPlay) {
        this.play()
      }
    },
    onScrollEnd() {
      this.updatePageIndex()
    },
    initDots() {
      this.dots = new Array(this.children.length)
    },
    play() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.swipe.next()
      }, this.interval)
    },
    resize() {
      clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => {
        if (this.swipe.isInTransition) {
          this.onScrollEnd()
        } else {
          if (this.autoPlay) {
            this.play()
          }
        }
        this.refresh()
      }, 60)
    }
  },
  updated() {
  },
  mounted() {
    this.refresh()
    window.addEventListener('resize', () => {
      if (!this.swipe || !this.swipe.enable) return
      this.resize()
    })
  },
  activated() {
    if (!this.swipe) return
    this.swipe.enable()
    this.updatePageIndex()
  },
  deactivated() {
    this.swipe.disable()
    clearTimeout(this.timer)
  },
  beforeDestroy() {
    this.swipe.disable()
    clearTimeout(this.timer)
  }
}
</script>
