<template>
  <div class="mn-carousel"
    :class="{}"
    @click.prevent="onClick"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <div class="mn-carousel-content" :style="[
      { transform: translateX },
      transition
    ]">
      <!-- The carousel main contents -->
      <slot></slot>
    </div>
    <slot name="indicators">
      <div class="mn-carousel-indicators">
        <div class="mn-carousel-indicator"
          @click.prevent.stop="setIndex(item - 1)"
          :class="{ 'is-active': item === index + 1 }"
          v-for="item in length"
        ></div>
      </div>
    </slot>
  </div>
</template>

<script>
  /**
   * Carousel component
   */
  export default {
    name: 'mn-carousel',
    data () {
      return {
        startPageX: undefined,        // touch start x position
        startPageY: undefined,        // touch start y position
        length: 0,                    // carousel item length
        index: 0,                     // images index
        x: 0,                         // image container left offset width
        width: undefined,             // container total width
        transitionOpen: false,        // open css transition, when touch move, the data is false
        autoplayDuration: 2000,       // autoplay duration time
        autoplayDelay: 2000,          // autoplay delay start time
        requestAutoplay: false        // is opened autoplay now
      }
    },
    computed: {
      translateX () {
        return `translateX(${this.x * -1}px)`
      },
      transition () {
        return this.transitionOpen
          ? { transition: 'transform 0.5s ease-out' }
          : { transition: 'transform 0.15s linear' }
      }
    },
    methods: {
      /**
       * Change item length
       * @public setLength
       * @param {Number} length
       */
      setLength (length) {
        this.length = length
        return this
      },
      /**
       * Switch image index
       * @public setIndex
       * @param  {Number} index  - 0 is first image
       * @return {this}
       */
      setIndex (index) {
        this.index = index
        this.x = this.width * this.index
        this.closeAutoplay().delayOpenAutoplay()
        return this
      },
      /**
       * Switch to next image
       * @public nextIndex
       * @return {this}
       */
      nextIndex () {
        let nextIndex = this.index + 1
        this.setIndex(nextIndex > (this.length - 1) ? 0 : nextIndex)
        return this
      },
      /**
       * Switch to prev image
       * @public prevIndex
       * @return {this}
       */
      prevIndex () {
        const prevIndex = this.index - 1
        this.setIndex(prevIndex < 0 ? this.length - 1 : prevIndex)
        return this
      },
      /**
       * Open or close autoplay
       * @public autoplay
       * @param  {Boolean} active
       * @return {this}
       */
      autoplay (active) {
        this.requestAutoplay = active
        active ? this.openAutoplay() : this.closeAutoplay()
        return this
      },
      touchStart (event) {
        this.closeAutoplay()
        this.startPageY = event.touches[0].pageY
        this.startPageX = event.touches[0].pageX
        this.movePageX = this.startPageX
        this.transitionOpen = false
      },
      touchMove (event) {
        let offsetY = this.startPageY - event.touches[0].pageY
        let offsetX = this.movePageX - event.touches[0].pageX

        // 上下偏移小于 10 的范围内，左右偏移要大于 10 的范围，才触发
        if ((offsetY >= -10 || offsetY <= 10) && (offsetX >= 10 || offsetX <= -10)) {
          event.preventDefault()

          if (this.index === 0 && offsetX < -36) {
            return
          }
          if (this.index === this.length - 1 && offsetX > 26) {
            return
          }
          // 修改 x 的距离
          this.x = this.x + offsetX
          // 变化起始点
          this.movePageX = event.touches[0].pageX
        }
      },
      touchEnd (event) {
        if (this.index < this.length - 1 && this.movePageX - this.startPageX < this.width * -0.2) {
          this.index += 1
        } else if (this.index > 0 && this.movePageX - this.startPageX > this.width * 0.2) {
          this.index += -1
        }
        this.transitionOpen = true
        this.x = this.width * this.index
        this.delayOpenAutoplay()
      },
      setElementWidth () {
        if (this.width !== this.$el.offsetWidth) {
          this.width = this.$el.offsetWidth
        }
      },
      openAutoplay () {
        if (!this.autoplayInterval) {
          this.autoplayInterval = setInterval(this.nextIndex, this.autoplayDuration)
        }
        return this
      },
      closeAutoplay () {
        if (this.autoplayInterval) {
          clearInterval(this.autoplayInterval)
          this.autoplayInterval = undefined
        }
        return this
      },
      delayOpenAutoplay () {
        return new Promise(resolve => {
          setTimeout(() => {
            if (this.requestAutoplay) this.openAutoplay()
            resolve()
          }, this.autoplayDelay)
        })
      },
      onClick (event) {
        // @todo remove this function
        // if (event.offsetX === undefined) return
        // if (event.offsetX < this.width / 2) {
        //   this.prevIndex()
        // } else {
        //   this.nextIndex()
        // }
      }
    },
    watch: {
      index (newValue) {
        /**
         * @event index
         * @property {Number} index  - current image index
         */
        this.$emit('index', newValue)
      },
      length (newValue) {
        /**
         * @event length
         * @property {Number} length - current images length
         */
        this.$emit('length', newValue)
      }
    },
    created () {
      // Get image items length by created
      if (!this.$slots.default) {
        this.length = 0
      } else {
        this.length = this.$slots.default.filter(item => item.tag && item.tag.includes('mn-carousel-item')).length
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.setElementWidth()
        window.addEventListener('resize', this.setElementWidth)
      })
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.setElementWidth)
    }
  }
</script>
