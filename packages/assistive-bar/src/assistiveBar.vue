<template>
  <div class="mn-assistive-bar">
    <div class="mn-assistive-bar-btn" ref="btn" @touchstart="onStart" @touchmove="onMove" @touchend="onEnd" :class="{ 'is-animation': enableAnimation }" :style="{ top: `${y}px`, left: `${x}px` }">
      <div class="mn-assistive-bar-item" @click="onBack">
        <mn-icon :name="isRootRoute ? homeIcon : backIcon" :loading="backLoading"></mn-icon>
      </div>
      <div class="mn-assistive-bar-item" @click="onOpen">
        <mn-icon :name="keypadIcon" :loading="menuLoading"></mn-icon>
      </div>
    </div>
  </div>
</template>

<script>
  import { icon } from '@humans/icon'
  import backIcon from 'vue-human-icons/js/ios/arrow-back.js'
  import homeIcon from 'vue-human-icons/js/android/home.js'
  import keypadIcon from 'vue-human-icons/js/ios/keypad.js'

  /**
   * Assistive bar component
   */
  export default {
    name: 'mn-assistive-bar',
    components: Object.assign({}, icon),
    props: {
      /**
       * Show self
       */
      show: Boolean
    },
    data () {
      return {
        enableAnimation: false,
        backLoading: false,
        menuLoading: false,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        btnWidth: 118,
        isRootRoute: true,
        backIcon,
        homeIcon,
        keypadIcon
      }
    },
    watch: {
      $route () {
        this.isRootRoute = false
      }
    },
    methods: {
      onStart (event) {
        this.startPageY = event.touches[0].pageY
        this.startPageX = event.touches[0].pageX
        this.currentX = this.x
        this.currentY = this.y
        this.enableAnimation = false
      },
      onMove (event) {
        event.preventDefault()
        const movePageX = event.touches[0].pageX
        const movePageY = event.touches[0].pageY

        if (movePageX > 8 || movePageY > 8) {
          this.x = this.currentX + (movePageX - this.startPageX)
          this.y = this.currentY + (movePageY - this.startPageY)
        }
      },
      onEnd (event) {
        this.enableAnimation = true
        const leftPadding = 16
        const rightPadding = this.width - this.btnWidth - 16

        if (this.x < leftPadding || (this.x !== leftPadding && this.x <= this.width / 2 - this.btnWidth / 2)) {
          this.x = leftPadding
        }

        if (this.x > rightPadding || (this.x !== rightPadding && this.x > this.width / 2 - this.btnWidth / 2)) {
          this.x = rightPadding
        }

        if (this.y < 16) {
          this.y = 16
        }

        if (this.y > this.height - 44 - 16) {
          this.y = this.height - 44 - 16
        }
      },
      onBack () {
        this.openLoading('backLoading')
        if (this.isRootRoute) {
          this.$router.push({ name: 'homepage' })
        } else {
          this.$router.go(-1)
        }
      },
      onOpen () {
        this.openLoading('menuLoading')

        /**
         * @event update:show
         * @property {Boolean} show  - show self
         */
        this.$emit('update:show', true)
      },
      openLoading (name, time = 600) {
        this[name] = true
        setTimeout(() => {
          this[name] = false
        }, time)
      },
      setOffset () {
        this.width = document.body.offsetWidth
        this.height = document.body.offsetHeight
        this.btnWidth = this.$refs.btn.offsetWidth
        this.x = this.width - this.btnWidth - 16
        this.y = this.height - 44 - 16
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.setOffset()
        window.addEventListener('resize', this.setOffset)
        setTimeout(() => {
          this.enableAnimation = true
        }, 2000)
      })
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.setOffset)
    }
  }
</script>
