<template>
  <div
    class="mn-scroller"
    :class="{ 'is-hide-bar': !scrollbar }"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
    @scroll="scroll"
  >
    <div class="mn-scroller-contents">
      <!-- scroller contents -->
      <slot></slot>
    </div>
    <div class="mn-scroller-mask" v-if="loading">
      <slot name="loading" v-if="showLoadingTip"></slot>
    </div>
  </div>
</template>

<script>
  import ScrollSessionStorage from './ScrollSessionStorage'

  /**
   * Scrollers instance to save scrollers.
   */
  const scrollStorage = new ScrollSessionStorage()

  /**
   * Scroller component
   */
  export default {
    name: 'mn-scroller',
    props: {
      /**
       * Do scroller save the top scroll value
       */
      save: {
        type: Boolean,
        default: true
      },
      /**
       * The scroller name.
       * if have two scroller in one page, you need set thier name.
       */
      name: {
        type: String,
        default: 'default'
      },
      /**
       * Save mode.
       * full only include path,
       * fullPath include path and string query
       */
      mode: {
        type: String,
        default: 'path',
        validator: val => ['path', 'fullPath'].includes(val)
      },
      /**
       * Show scrollbar
       */
      scrollbar: {
        type: Boolean,
        default: false
      },
      /**
       * When the scroll height close to the bottom minimum critical point,
       * itself will emit bottom event.
       */
      bottomMinHeight: {
        type: Number,
        default: 20
      },
      /**
       * You can define a new ScrollStorage to rewrite it.
       * The default value should be a ScrollStorage Instance.
       */
      storage: {
        type: Object,
        default: () => scrollStorage
      },
      /**
       * You can rewrite the promise to call scroll back to last top value.
       * When you are sure your DOM is updated.
       */
      finishLoadingFn: {
        type: Function,
        default () {
          return new Promise(resolve => setTimeout(resolve, 100))
        }
      },
      /**
       * Delay before showing the loading tip.
       */
      delayLoadingTip: {
        type: Number,
        default: 200
      }
    },
    data () {
      return {
        /**
         * @todo remove
         */
        time: undefined,
        createdScrollTop: false,
        loading: true,
        showLoadingTip: false
      }
    },
    methods: {
      touchStart (event) {
        // Save origin pageX and pageY in touchStart
        this.startPageY = event.touches[0].pageY
        this.startPageX = event.touches[0].pageX

        /**
         * @event touchstart
         * @property {Event} event - DOM Event
         * @property {VueComponent} scroller - scroller self
         */
        this.$emit('touchstart', event, this)
      },
      touchMove (event) {
        const pageY = event.touches[0].pageY
        const scrollTop = this.$el.scrollTop
        const scrollHeight = this.$el.scrollHeight
        const containerHeight = this.$el.offsetHeight
        const distance = pageY - this.startPageY

        // If the scrollTop is equal 0 and direction of touch is downward,
        // we should emit the pull event.
        if (scrollTop === 0 && distance > 0) {
          this.$emit('pull', event, this, distance)
        }

        // If startPageX is too low,
        // allow swipe to right to emit browser back event.
        if (this.startPageX > 16) {
          // prevent top scroll less than 0, case in safari or wechat browser.
          if (pageY > this.startPageY && scrollTop <= 0) {
            event.preventDefault()
          }

          // prevent top scroll great than container height, case in safari or wechat browser.
          if (pageY < this.startPageY && scrollTop >= scrollHeight - containerHeight) {
            event.preventDefault()
          }
        }

        /**
         * @event touchmove
         * @property {Event} event - DOM Event
         * @property {VueComponent} scroller - scroller self
         */
        this.$emit('touchmove', event, this)
      },
      touchEnd (event) {
        this.scrollAndTouchEnd(event)

        /**
         * @event touchend
         * @property {Event} event - DOM Event
         * @property {VueComponent} scroller - scroller self
         */
        this.$emit('touchend', event, this)
      },
      scroll (event) {
        this.scrollAndTouchEnd(event)

        /**
         * @event scroll
         * @property {Event} event - DOM Event
         * @property {VueComponent} scroller - scroller self
         */
        this.$emit('scroll', event, this)
      },
      scrollAndTouchEnd (event) {
        this.saveScrollTop()

        // pull to the scroller top
        if (this.$el.scrollTop <= 0) {
          /**
           * @event top
           * @property {Event} event - DOM Event
           * @property {VueComponent} scroller - scroller self
           */
          this.$emit('top', event, this)
        }

        // push to the scroller bottom
        if (this.$el.offsetHeight >= this.$el.scrollHeight - this.$el.scrollTop - this.bottomMinHeight) {
          /**
           * @event bottom
           * @property {Event} event - DOM Event
           * @property {VueComponent} scroller - scroller self
           */
          this.$emit('bottom', event, this)
        }
      },
      getRoutePath () {
        return this.$route[this.mode]
      },
      createScrollTop () {
        // The method will be exec in mounted hook.
        // Check the app install `vue-router`,
        // and allow to save the top scroll value.
        if (!this.$route || !this.save) return
        // Get scroller top from share state, and give the value to the scroller.
        this.$el.scrollTop = this.storage.getScroller(this.getRoutePath(), this.name).top
        // Set createdScrollTop is true,
        // In order to tell the scroller: the scrollTop complete initialization.
        // After initialization, the scroller can save new scrollTop value.
        this.createdScrollTop = true

        // Clear old timeout
        if (this.loadingTipTimer) {
          clearTimeout(this.loadingTipTimer)
        }

        // Hide loading mask and loading tip
        this.loading = false
        this.showLoadingTip = false
      },
      saveScrollTop () {
        // Check the app install `vue-router`,
        // and allow to save the top scroll value.
        // And the scrollTop after initialization, it can save new value.
        if (!this.$route || !this.save || !this.createdScrollTop) return
        // Save new scrollTop value.
        this.storage.addScroller(this.getRoutePath(), this.name, this.$el.scrollTop)
      },
    },
    mounted () {
      // If the loading is true, it will set timeout to show loading tip.
      // For example loading icon or loading tip text.
      // If the loading is false by initial time, the timer isn't worked.
      // So, developer can control the loading mask's showing and tip's showing.
      if (this.loading) {
        this.loadingTipTimer = setTimeout(() => this.showLoadingTip = true, this.delayLoadingTip)
      }

      // Wait finishFn promise.
      // When the DOM has updated, then set scroll top and finish loading.
      this.finishLoadingFn().then(() => {
        this.$nextTick(() => this.createScrollTop())
      })
    }
  }
</script>
