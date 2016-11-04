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
        // Add css prefix
        classes[`${this.defaultClasses}slide-box`] = true
        // Animation
        classes['slide-back'] = true
        return Object.assign({}, classes)
      },
      slideWrap () {
        let classes = {}
        // Add css prefix
        classes[`${this.defaultClasses}slide-wrap`] = true
        return Object.assign({}, classes)
      },
      slideBoxStyle () {
        let translateX = this.distance
        return `transform: translateX(${translateX}px);`
      },
      slideWrapStyle () {
        return `width: ${this.width};`
        // Set initial width.
      }
    },
    data () {
      return {
        defaultClasses: this.$human.cssPrefix,
        // Defaul css prefix
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
        maxSlide: 0,
        // The max value of slide.
        startTime: 0,
        // Start time depends on on-touchstart event.
        finishTime: 0,
        // Finish time depends on on-touchend event.
        swipe: {
        // Some options for swipe event
          distance: 150,  // Default swipe distance
          duration: 300,  // Default swipe duration
          multiple: 2     // Default swipe multiple
        }
      }
    },
    methods: {
      moveEvent: function (event) {
        this.CurrentPosition = event.touches[0].screenX
        this.direction = (this.CurrentPosition < this.lastPosition) ? 'left' : 'right'
        // Judge the direction.
        this.distance = (!this.ifTouched)
                      ? this.CurrentPosition - this.startPosition
                      : this.CurrentPosition - this.startPosition + this.lastDistance
        // Counting the distance.
        // If it is the first touch, return distance.
        // If touched, return distance + last distance

        if (this.distance > 0) this.distance = this.distance / 10
        // If touched at the far left.
        if (this.distance < this.maxSlide && this.lastDistance === this.maxSlide) this.distance = (this.CurrentPosition - this.startPosition) / 10 + this.maxSlide
        // If touched at the far right.

        this.lastPosition = this.CurrentPosition
      },
      startEvent: function (event) {
        this.startTime = new Date().getTime()
        // Set the start time.
        this.startPosition = event.touches[0].screenX
        // Set the start position.
        this.lastPosition = this.startPosition
        // Set the last position
      },
      endEvent: function (event) {
        this.finishTime = new Date().getTime()
        // Set finish time.
        const duration = this.finishTime - this.startTime
        const distance = Math.abs(this.CurrentPosition - this.startPosition)
        this.swipeEvent(distance, duration)
        // Trigger the swipe or not.

        if (this.direction === 'left') {
          if (this.distance < this.maxSlide) {
            this.distance = this.maxSlide
            this.lastDistance = this.maxSlide
          }
        } else {
          if (this.distance > 0) {
            this.distance = 0
            this.lastDistance = 0
          }
        } this.distance = this.distance
        // If touched at the far left or the far right.
        this.ifTouched = true
        this.lastDistance = this.distance
      },
      swipeEvent: function (distance, duration) {
        if (duration < this.swipe.duration && distance > this.swipe.distance) {
          this.distance = (this.direction === 'left')
                        ? this.distance + this.distance * this.swipe.multiple
                        : this.distance - this.distance * this.swipe.multiple
        }
        return
        // Swipe event
      }
    },
    mounted () {
      let sum = 0
      this.$children.map(function (item) {
        sum += item.$el.clientWidth
      })
      this.maxSlide = this.$refs.wrap.clientWidth - sum
      // Counting the max slide value.
    }
  }
</script>
