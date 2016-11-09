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
      v-if="this.button"
      class="scroller-button"
      @click="buttonClick"
    >{{ this.buttonText }}</button>
  </div>
</template>

<script>
  export default {
    props: {
      save: {
        type: Boolean,
        default: false
      },
      button: {
        type: Boolean,
        default: false
        // whether to show the bottom button
      },
      buttonText: {
        type: String,
        default: 'Loading...'
        // the text on the button
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
        gesture: ''
        // the gesture
        // including: up & down
      }
    },
    mounted () {
      console.log(this)
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
        this.startPosition = 0
        this.lastPosition = 0
        this.distance = 0
        // Reset the data.
        if (this.isStart) this.$emit('drag-down')
        // Trigger the 'drag-down' when the fingers are released
      },
      wheelEvent: function (event) {

      },
      buttonClick: function () {
        this.$emit('button-click')
        // Trigger the  'button-click' when you click the button
      }
    },
    computed: {
      styles () {
        return `transform: translateY(${this.distance}px)`
        // If drag down, trigger some transform.
      }
    }
  }
</script>

<style lang="scss">
  .scrollbar-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .scroller-button {
    display: block;
    width: 100%;
    margin: 10px auto;
    font-size: 0.75rem;
    color: #999;
  }
</style>
