<template>
  <div class="scrollbar-wrapper"
    :class="{ 'is-save': save }"
    :style="styles"
    @touchstart="startEvent($event)"
    @touchmove="moveEvent($event)"
    @touchend="endEvent($event)"
    @wheel="wheelEvent($event)">
    <div class="scrollbar-contents" ref="content">
      <slot></slot>
    </div>
    <button
      type="button"
      name="button"
      v-if="this.bottom"
      class="scroller-button"
      @click="buttonClick"
    >{{ this.buttonText }}</button>
    <transition name="scroller-slideUp">
      <button
        type="button"
        name="button"
        class="scroll-to-top"
        @click="scrollTop"
        v-if="isScrollTop">
        <mn-icon name="arrow-up-a">
      </button>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      save: {
        type: Boolean,
        default: false
      },
      bottom: {
        type: Boolean,
        default: false
        // whether to show the bottom button
      },
      buttonText: {
        type: String,
        default: 'Loading...'
        // the text on the button
      },
      scrollToTop: {
        type: Boolean,
        default: false
        // whether to provide the function of scrolling to top
      }
    },
    data () {
      return {
        isEnd: false,
        // whether the page has reached the bottom
        isStart: false,
        // whether the page has reached the top
        startPosition: 0,
        // the start position
        lastPosition: 0,
        // the last position
        distance: 0,
        // the distance for styles
        gesture: '',
        // the gesture
        // including: up & down
        isScrollTop: false,
        // whether to show the scroll to top button
        duration: 200
        // default duration for scrolling
      }
    },
    methods: {
      startEvent: function (event) {
        this.isEnd = false
        this.isStart = false
        // Reset the data.
        this.startPosition = event.touches[0].pageY
        this.lastPosition = event.touches[0].pageY
      },
      moveEvent: function (event) {
        this.startPosition = event.touches[0].pageY
        this.gesture = (this.startPosition < this.lastPosition) ? 'up' : 'down'
        // Set the gesture direction.

        if (this.$el.scrollTop >= this.$el.scrollHeight - this.$el.clientHeight && !this.isEnd && this.gesture === 'up') {
          this.$emit('pull-up')
          this.isEnd = true
          // Determine whether the page has reached the bottom
          // If reached, trigger the 'pull-up'
        }

        if (this.$el.scrollTop === 0 && this.gesture === 'down') {
          this.distance++
          if (!this.isStart) this.isStart = true
          // Determine whether the page has reached the top
        }
        this.lastPosition = this.startPosition
      },
      endEvent: function (event) {
        if (this.isStart) this.$emit('drag-down', this.distance)
        //
        // Trigger the 'drag-down' when the fingers are released
        // Provide the 'distance'
        //
        this.startPosition = 0
        this.lastPosition = 0
        this.distance = 0
        // Reset the data.
      },
      wheelEvent: function (event) {
        if (event.deltaY > 0 && this.$el.scrollTop >= this.$el.scrollHeight - this.$el.clientHeight && !this.isEnd) {
          this.isEnd = true
          this.$emit('pull-up')
          // Determine whether the page has reached the bottom
          // If reached, trigger the 'pull-up'
        }
        if (event.deltaY < 0) this.isEnd = false

        if (event.deltaY > 0 && this.$el.scrollTop > this.$el.clientHeight && this.scrollToTop) this.isScrollTop = true
        if (event.deltaY < 0 && this.$el.scrollTop <= this.$el.clientHeight && this.scrollToTop) this.isScrollTop = false
      },
      buttonClick: function () {
        this.$emit('button-click')
        // Trigger the 'button-click' when you click the button
      },
      scrollTop: function () {
        this.scrolling(this.duration)
        this.isScrollTop = false
      },
      scrolling: function (duration) {
        let scrollStep = this.$el.scrollTop / (duration / 15)
        let scrollInterval = setInterval(() => {
          if (this.$el.scrollTop !== 0) this.$el.scrollTop -= scrollStep
          else clearInterval(scrollInterval)
        }, 15)
      }
    },
    computed: {
      styles () {
        if (this.distance > 0) {
          return `transform: translateY(${this.distance}px)`
        }
        // If drag down, trigger some transform.
      }
    }
  }
</script>
