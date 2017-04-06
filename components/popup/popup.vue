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
  import ANIMATIONS from './animations'
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
        default: 'fadeIn',
        validator: val => {
          const animations = Object.keys(ANIMATIONS)
          const valid = animations.includes(val)
          if (!valid) console.warn(`您使用了 ${val} ，仅支持 ${Object.keys(ANIMATIONS)}`)
          return valid
        }
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
      transition () {
        return ANIMATIONS[this.animation]
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
    &-slide-in-bottom-enter-active,
    &-slide-in-bottom-leave-active {
      transition: transform 0.3s;
    }

    &-slide-in-bottom-enter,
    &-slide-in-bottom-leave-active {
      transform: translateY(100%);
    }

    // Fade in
    &-fade-in-enter-active,
    &-fade-in-leave-active {
      transition: opacity 0.3s linear;
    }

    &-fade-in-enter,
    &-fade-in-leave-active {
      opacity: 0;
    }

    // Slide from up
    &-slide-in-top-enter-active {
      transition: transform 0.3s;
    }

    &-slide-in-top-leave-active {
      transition: opacity 0.3s linear;
    }

    &-slide-in-top-enter {
      transform: translateY(-100%);
    }

    &-slide-in-top-leave-active {
      opacity: 0;
    }
  }
</style>
