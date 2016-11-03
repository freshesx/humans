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
        // Start positon depends on  on-touchstart event.
        CurrentPosition: 0,
        // Current position depends on on-touchmove event.
        lastPosition: 0,
        // The last position.
        ifTouched: false,
        // If touched or not
        direction: 'middle',
        // The direction of touch events.
        distance: 0,
        // Counting the distance for transform.
        lastDistance: 0,
        // The last distance.
        slideBack: false,
        // Trigger the animation or not.
        maxSlideValue: 0,
        // The max value of slide.
        startTime: 0,
        // Start time depends on on-touchstart event.
        finishTime: 0,
        // Finish time depends on on-touchend event.
        swipeDuration: 300,
        // Default swipe duration
        swipeDistance: 150,
        // Default swipe distance
        swipeMultiple: 5
        // Default swipe multiple
      }
    },
    methods: {
      moveEvent: function (event) {
        this.CurrentPosition = event.touches[0].screenX
        this.direction = (this.CurrentPosition < this.lastPosition) ? 'left' : 'right'
        // Judge the direction.

        if (!this.ifTouched) {
          this.distance = this.CurrentPosition - this.startPosition
          this.lastDistance = this.distance
        } else {
          this.distance = this.CurrentPosition - this.startPosition + this.lastDistance
        }
        // Counting the distance.
        // If it is the first touch, return distance.
        // If touched, return distance + last distance

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

        this.startTime = new Date().getTime()
      },
      endEvent: function (event) {
        this.finishTime = new Date().getTime()
        let duration = this.finishTime - this.startTime
        let distance = Math.abs(this.CurrentPosition - this.startPosition)

        if (duration < this.swipeDuration && distance > this.swipeDistance) {
          if (this.direction === 'left') {
            this.distance += this.distance * this.swipeMultiple
          } else {
            this.distance -= this.distance * this.swipeMultiple
          }
        }

        if (this.direction === 'left') {
          if (this.distance < this.maxSlideValue) {
            this.distance = this.maxSlideValue
            this.lastDistance = this.maxSlideValue
          }
        } else {
          if (this.distance > 0) {
            this.distance = 0
            this.lastDistance = 0
          }
        }
        this.distance = this.distance

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
