<template>
  <div :class="slideWrap" ref="wrap">
    <div
      :class="slideBox"
      @touchmove="moveEvent($event)"
      @touchstart="startEvent($event)"
      @touchend = "endEvent($event)"
      :style="slideBoxStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      width: {
        type: String,
        default: '100%'
      }
    },
    computed: {
      slideBox () {
        let classes = {}
        classes[`${this.defaultClasses}slide-box`] = true
        // Animation
        classes['slide-back'] = this.slideBack
        return Object.assign({}, classes)
        // Add css prefix
      },
      slideWrap () {
        let classes = {}
        classes[`${this.defaultClasses}slide-wrap`] = true
        // Animation
        return Object.assign({}, classes)
        // Add css prefix
      },
      slideBoxStyle () {
        let translateX = this.distance
        return `transform: translateX(${translateX}px);`
      },
      slideWrapStyle () {
        return `width: ${this.width};`
      }
    },
    data () {
      return {
        defaultClasses: this.$human.cssPrefix,
        startPosition: 0,
        CurrentPosition: 0,
        lastPosition: 0,
        ifTouched: false,
        direction: 'middle',
        distance: 0,
        lastDistance: 0,
        slideBack: false,
        maxSlideValue: 0,
        multiple: 10
      }
    },
    methods: {
      moveEvent: function (event) {
        this.CurrentPosition = event.touches[0].screenX
        this.direction = (this.CurrentPosition < this.lastPosition) ? 'left' : 'right'

        if (!this.ifTouched) {
          this.distance = this.CurrentPosition - this.startPosition
          this.lastDistance = this.distance
        } else {
          this.distance = this.CurrentPosition - this.startPosition + this.lastDistance
        }

        if (this.distance > 0) {
          this.distance = this.distance / 10
        }
        if (this.distance < this.maxSlideValue && this.lastDistance === this.maxSlideValue) {
          this.distance = (this.CurrentPosition - this.startPosition) / 10 + this.maxSlideValue
        }

        this.lastPosition = this.CurrentPosition
      },
      startEvent: function (event) {
        this.startPosition = event.touches[0].screenX
        this.lastPosition = this.startPosition
      },
      endEvent: function (event) {
        if (this.direction === 'left') {
          if (this.distance < this.maxSlideValue || this.distance * this.multiple < this.maxSlideValue) {
            this.distance = this.maxSlideValue
            this.lastDistance = this.maxSlideValue
          } else {
            this.distance = this.distance * this.multiple
          }
        } else {
          if (this.distance > 0) {
            this.distance = 0
            this.lastDistance = 0
          } else {
            this.distance = this.distance / this.multiple
          }
        }

        this.ifTouched = true
        this.lastDistance = this.distance
        this.slideBack = true
      }
    },
    mounted () {
      let sum = 0
      for (let i in this.$children) {
        sum += this.$children[i].$el.clientWidth
      }
      this.maxSlideValue = this.$refs.wrap.clientWidth - sum
    }
  }
</script>
