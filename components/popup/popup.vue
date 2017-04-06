<template>
  <transition :name="transition">
    <div class="mn-popup" :style="zIndexStyle" v-if="show">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  import Element from '../../util/Element'
  import maskElement from './mask'
  import { getZIndex } from './layer'

  export default new Element({
    name: 'mn-popup',
    props: {
      show: Boolean,
      masked: {
        type: Boolean,
        default: true
      },
      zIndex: {
        type: Number
      },
      animation: {
        type: String,
        default: 'fadeIn'
      }
    },
    methods: {
      /**
       * 抛出关闭 popup 的事件
       * @return {void}
       */
      closePopup () {
        this.$emit('closePopup')
        this.$emit('close')   // closePopup 的别名，推荐直接使用 closePopup
      },
      /**
       * 如果需要打开 mask，则构建 maskElement 并监听 close 事件
       * @param {Number} zIndex
       * @return {void}
       */
      appendMask (zIndex) {
        if (this.masked) {
          this.mask = maskElement.create().appendToBody()
          this.mask.zIndex = zIndex
          this.mask.show = true
          this.mask.$on('closeMask', () => {
            this.closePopup()
          })
        }
      },
      /**
       * 关闭和销毁 mask
       * @return {viod}
       */
      destroyMask () {
        if (this.mask) {
          this.mask.closeAndDestroy()
          this.mask = undefined
        }
      }
    },
    watch: {
      /**
       * 监听 show 的变化，true 则插入 mask，false 则销毁 mask，
       * mask 的 z-index 比 popup 小 1
       * @param {Boolean} newValue
       * @return {void}
       */
      show (newValue) {
        if (newValue) {
          this.appendMask(this.computedZIndex - 1)
        } else {
          this.destroyMask()
        }
      }
    },
    computed: {
      animations () {
        return {
          fadeIn: `mn-popup-fade`,
          slideInDown: `mn-popup-slide`,
          slideInUp: `mn-popup-slideup`
        }
      },
      transition () {
        return this.animations[this.animation]
      },
      computedZIndex () {
        return this.zIndex ? this.zIndex : getZIndex()
      },
      zIndexStyle () {
        return {
          'z-index': this.computedZIndex
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-popup {
    position: fixed;

    // Slide from down
    &-slide-enter-active,
    &-slide-leave-active {
      transition: transform 0.3s;
    }

    &-slide-enter,
    &-slide-leave-active {
      transform: translateY(100%);
    }

    // Fade in
    &-fade-enter-active,
    &-fade-leave-active {
      transition: opacity 0.3s linear;
    }

    &-fade-enter,
    &-fade-leave-active {
      opacity: 0;
    }

    // Slide from up
    &-slideup-enter-active {
      transition: transform 0.3s;
    }

    &-slideup-leave-active {
      transition: opacity 0.3s linear;
    }

    &-slideup-enter {
      transform: translateY(-100%);
    }

    &-slideup-leave-active {
      opacity: 0;
    }
  }
</style>
