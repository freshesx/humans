<template>
  <div
    class="mn-carousel"
    :class="{}"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd">
    <div class="mn-carousel-content" :style="[
      { transform: translateX },
      transition
    ]">
      <slot></slot>
    </div>
    <slot name="indicators">
      <div class="mn-carousel-indicators">
        <div class="mn-carousel-indicator"
          @click.prevent.stop="onChangeItem(item)"
          :class="{ 'is-active': item === index + 1 }"
          v-for="item in length"></div>
      </div>
    </slot>
  </div>
</template>

<script>
  import Element from '../../util/Element'

  export default new Element({
    name: 'mn-carousel',
    data () {
      return {
        startPageX: undefined,
        startPageY: undefined,
        length: 0,
        index: 0,
        x: 0,
        width: undefined,
        transitionOpen: false
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
      touchStart (event) {
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
      },
      setElementWidth () {
        if (this.width !== this.$el.offsetWidth) {
          this.width = this.$el.offsetWidth
        }
      },
      onChangeItem (item) {
        this.index = item - 1
        this.x = this.width * this.index
      }
    },
    watch: {
      index (newValue) {
        this.$emit('index', newValue)
      },
      length (newValue) {
        this.$emit('length', newValue)
      }
    },
    created () {
      // 初始化时获得 items 数量
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
  })
</script>

<style lang="scss">
  @import "../../scss/vars.scss";

  .mn-carousel {
    width: 100%;
    overflow: hidden;
    position: relative;

    &-content {
      display: flex;
    }

    &-indicators {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      bottom: 0.5rem;
    }

    &-indicator {
      $radius: 0.5rem;
      width: $radius;
      height: $radius;
      background: rgba(255, 255, 255, 0.8);
      border-radius: $radius * 0.5;
      margin: 0 0.25rem;
      transition: width 0.2s, background 0.8s;

      &.is-active {
        width: $radius * 1.6;
        height: $radius * 1.1;
        background: $pink;
      }
    }
  }
</style>
