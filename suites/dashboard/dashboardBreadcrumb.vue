<template>
  <div class="mn-dashboard-breadcrumb">
    <div class="mn-dashboard-breadcrumb-btn" ref="btn" @touchstart="onStart" @touchmove="onMove" @touchend="onEnd" :class="{ 'is-animation': enableAnimation }" :style="{ top: `${y}px`, left: `${x}px` }">
      <div class="mn-dashboard-breadcrumb-item" @click="onBack" v-if="!loading">
        <mn-icon :name="icons.back" vertical="-2px"></mn-icon>
      </div>
      <div class="mn-dashboard-breadcrumb-item" v-if="loading">
        <mn-loading-icon></mn-loading-icon>
      </div>
      <div class="mn-dashboard-breadcrumb-item" @click="onOpen">
        <mn-icon :name="icons.keypad" vertical="-2px"></mn-icon>
      </div>
    </div>
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import iconElement from '../icon/icon'
  import loadingIconElement from '../loadingIcon/loadingIcon'

  export default new Element({
    name: 'mn-dashboard-breadcrumb',
    components: {
      ...iconElement.inject(),
      ...loadingIconElement.inject()
    },
    props: {
      show: Boolean
    },
    data () {
      return {
        enableAnimation: false,
        loading: false,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        btnWidth: 118,
        icons: {
          back: require('vue-human-icons/js/ios/arrow-back'),
          keypad: require('vue-human-icons/js/ios/keypad')
        }
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

        if (this.x < 16) {
          this.x = 16
        }

        if (this.x > this.width - this.btnWidth - 16) {
          this.x = this.width - this.btnWidth - 16
        }

        if (this.y < 16) {
          this.y = 16
        }

        if (this.y > this.height - 44 - 16) {
          this.y = this.height - 44 - 16
        }
      },
      onBack () {
        this.openLoading()
        this.$router.go(-1)
      },
      onOpen () {
        this.$emit('update:show', true)
      },
      openLoading (time = 600) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, time)
      },
      setOffset () {
        this.width = document.body.offsetWidth
        this.height = document.body.offsetHeight
        this.x = 16
        this.y = this.height - 44 - 16
        this.btnWidth = this.$refs.btn.offsetWidth
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

      console.log(this.$route)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.setOffset)
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars.scss";

  .mn-dashboard-breadcrumb {
    // position: relative;
    width: 100%;
    height: 0;
  }

  .mn-dashboard-breadcrumb-btn {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    height: 44px;
    border-radius: 22px;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    left: 1rem;
    bottom: 1rem;

    &.is-animation {
      transition-duration: 500ms;
    }
  }

  .mn-dashboard-breadcrumb-item {
    padding: 0 1.2rem;

    & + & {
      border-left: solid 1px rgba(255, 255, 255, 0.1);
    }
  }
</style>
