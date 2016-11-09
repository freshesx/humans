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
      },
      buttonText: {
        type: String,
        default: 'Loading...'
      }
    },
    data () {
      return {
        isEnd: false,
        isStart: false,
        startPosition: 0,
        lastPosition: 0,
        gesture: ''
      }
    },
    mounted () {
      console.log(this)
    },
    methods: {
      startEvent: function (event) {
        this.isEnd = false
        this.isStart = false
        this.startPosition = event.touches[0].pageY
        this.lastPosition = event.touches[0].pageY
      },
      moveEvent: function (event) {
        this.startPosition = event.touches[0].pageY
        this.gesture = (this.startPosition < this.lastPosition) ? 'up' : 'down'
        if (this.$el.scrollTop >= this.$el.scrollHeight - this.$el.clientHeight && !this.isEnd && this.gesture === 'up') {
          this.$emit('pull-up')
          this.isEnd = true
        }
        if (this.$el.scrollTop === 0 && !this.isStart && this.gesture === 'down') {
          this.$emit('drag-down')
          this.isStart = true
        }
        this.lastPosition = this.startPosition
      },
      endEvent: function (event) {

      },
      wheelEvent: function (event) {
        if (this.$el.scrollTop >= this.$el.scrollHeight - this.$el.clientHeight) {
          this.$emit('pull-up')
        }
      },
      buttonClick: function () {
        this.$emit('button-click')
      }
    },
    computed: {
      styles () {
        return
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
  }
</style>
