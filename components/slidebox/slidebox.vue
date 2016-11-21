<template>
  <div :class="[ `${cssPrefix}slide-wrap` ]" :style="slideWrapStyle">
    <div
      :class="[ `${cssPrefix}slide-box`, 'slide-back', { 'is-full': this.isFull } ]"
      @touchmove="touchmove"
      @touchstart="touchstart"
      @touchend="touchend"
      @wheel="wheel"
      :style="slideBoxStyle"
      ref="box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      boxWidth: {
        type: String,
        default: '100%'
      },
      type: {
        type: String,
        default: 'normal'
      },
      maxWidth: {
        type: Number,
        default: 450
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      slideBoxStyle () {
        return `transform: translateX(${this.distance}px);`
      },
      slideWrapStyle () {
        return `width: ${this.boxWidth};`
        // Set initial width.
      }
    },
    data () {
      return {
        enableAnimation: false,
        // Enable the animation
        delayDistance: 100,
        // the delay distance when touch-end
        defaultClasses: this.$human.cssPrefix,
        // Defaul css prefix
        startPosition: 0,
        // Start positon depends on  on-touchstart event.
        CurrentPosition: 0,
        // Current position depends on on-touchmove event.
        lastPosition: 0,
        // The last position.
        isTouched: false,
        // If touched or not
        isFull: this.type === 'full',
        // If is-full
        direction: '',
        // The direction of touch events.
        distance: 0,
        // Counting the distance for transform.
        lastDistance: 0,
        // The last distance.
        maximum: 0,
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
      touchmove: function (event) {
        this.CurrentPosition = event.touches[0].screenX
        this.direction = (this.CurrentPosition < this.lastPosition) ? 'left' : 'right'
        // Judge the direction.
        this.distance = (!this.isTouched)
                      ? this.CurrentPosition - this.startPosition
                      : this.CurrentPosition - this.startPosition + this.lastDistance
        // Counting the distance.
        // If it is the first touch, return distance.
        // If touched, return distance + last distance

        if (this.distance > 0) this.distance = this.distance / 10
        // If touched at the far left.
        if (this.distance < this.maximum && this.lastDistance === this.maximum) this.distance = (this.CurrentPosition - this.startPosition) / 10 + this.maximum
        // If touched at the far right.

        this.lastPosition = this.CurrentPosition
      },
      touchstart: function (event) {
        this.startTime = new Date().getTime()
        // Set the start time.
        this.startPosition = event.touches[0].screenX
        // Set the start position.
        this.lastPosition = this.startPosition
        // Set the last position
        this.CurrentPosition = this.startPosition
        this.enableAnimation = false
        // Reset some data
      },
      touchend: function (event) {
        this.finishTime = new Date().getTime()
        // Set finish time.
        const duration = this.finishTime - this.startTime
        const distance = Math.abs(this.CurrentPosition - this.startPosition)

        console.log(distance)

        if (this.type === 'full') {
          // If type is full, slide all width once.
          if (distance > 20) {
            this.distance = (this.direction === 'left')
                          ? this.lastDistance - this.$children[0].$el.clientWidth
                          : this.lastDistance + this.$children[0].$el.clientWidth
          } else this.distance = this.lastDistance
        } else this.swipeEvent(distance, duration) // Trigger the swipe or not.

        if (this.direction === 'left') {
          if (this.distance < this.maximum) {
            this.distance = this.maximum
            this.lastDistance = this.maximum
          }
        } else {
          if (this.distance > 0) {
            this.distance = 0
            this.lastDistance = 0
          }
        } this.distance = this.distance
        // If touched at the far left or the far right.

        this.isTouched = true
        this.lastDistance = this.distance
        this.enableAnimation = true
      },
      swipeEvent: function (distance, duration) {
        if (duration < this.swipe.duration && distance > this.swipe.distance) {
          this.distance = (this.direction === 'left')
                        ? this.distance + this.distance * this.swipe.multiple
                        : this.distance - this.distance * this.swipe.multiple
        }

        this.distance = (this.direction === 'left') ? this.distance - this.delayDistance : this.distance + this.delayDistance
        // Swipe event
      },
      wheel: function (event) {
        if (event.deltaY !== -0) this.direction = (event.deltaY > 0) ? 'up' : 'down'

        this.distance += event.deltaY

        if (this.direction === 'down') {
          if (this.distance < this.maximum) {
            this.distance = this.maximum
            this.lastDistance = this.maximum
          }
        } else {
          if (this.distance > 0) {
            this.distance = 0
            this.lastDistance = 0
          }
        } this.distance = this.distance

        this.lastDistance = this.distance
        // wheel event
      }
    },
    mounted () {
      let sum = 0
      this.$children.map(function (item) {
        sum += item.$el.clientWidth
      })
      this.maximum = this.$el.clientWidth - sum - 2 * (this.$refs.box.offsetLeft - this.$el.offsetLeft)
      // Counting the max slide value.
    }
  }
</script>
