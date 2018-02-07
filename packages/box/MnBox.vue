<template>
  <div
    class="mn-box"
    :style="{
      transitionDuration: transitionDuration + 'ms',
      transform: `translateY(-${prefixHeight - pullDistance}px)`
    }"
  >
    <div
      class="mn-box-prefix"
      :style="{
        height: prefixHeight + 'px'
      }"
    >
      <slot name="prefix"></slot>
    </div>
    <div class="mn-box-body">
      <slot ref="scroller"></slot>
    </div>
  </div>
</template>

<script>
import { getScrollerVNode } from './helpers'

export default {
  name: 'MnBox',
  props: {
    /**
     * Define prefix area height.
     * When the prefix slot isn't defined, box will use this value to init prefix area.
     * You can set 0 to close prefix area.
     */
    prefixHolder: {
      type: Number,
      default: 80
    },
    /**
     * You can update pullDistanceFn to change pull progress.
     * By default it returns half the distance.
     * @param {Number} distance
     * @param {Object} params
     * @param {Event} params.event
     * @param {VueComponent} params.scroller
     */
    pullDistanceFn: {
      type: Function,
      default (distance, params) {
        return distance / 2
      }
    },
    /**
     * When pull touchend is emitted, this function will be call.
     * You can define the logic you want to in this function.
     * Just return a Promise.
     * pullDistance
     * @param {Number} ratio  - the ratio of pullDistance and prefixHeight
     * @param {Object} params
     * @param {Number} params.pullDistance
     * @param {Number} params.prefixHeight
     * @param {Event} params.event
     * @param {VueComponent} params.scroller
     */
    finishPullFn: {
      type: Function,
      default (ratio, params) {
        return new Promise(resolve => resolve())
      }
    },
    /**
     * You can create and extend new MnScroller,
     * and then you need to update scrollerTag prop.
     */
    scrollerTag: {
      type: Array,
      default: () => ['mn-scroller']
    }
  },
  data () {
    return {
      prefixHeight: 0,
      pullDistance: 0,
      transitionDuration: 0
    }
  },
  mounted () {
    // Parse $slots.default to get scroller vnode
    this.scrollerVNode = getScrollerVNode.call(this)

    // If the scroller vnode is extis, then listen their event.
    if (this.scrollerVNode) {
      // Listen pull event to show prefix area.
      this.scrollerVNode.componentInstance.$on('pull', (event, scroller, distance) => {
        this.transitionDuration = 0

        // You can define pullDistanceFn to change pull progress.
        this.pullDistance = this.pullDistanceFn(distance, {
          event,
          scroller
        })
      })

      // Listen touchend event to close prefix area.
      this.scrollerVNode.componentInstance.$on('touchend', (event, scroller) => {
        // If the pullDistance is equal 0, the prefix area isn't showed.
        if (this.pullDistance === 0) return

        // Open transition
        this.transitionDuration = 300

        // Compute the area pull destance ratio
        const ratio = this.pullDistance / this.prefixHeight

        // Combine params
        const params = {
          pullDistance: this.pullDistance,
          prefixHeight: this.prefixHeight,
          event: event,
          scroller: scroller
        }

        // Handle finishPullFn, and it must return Promise
        this.finishPullFn(ratio, params).then(() => {
          this.pullDistance = 0
        })
      })
    }

    // If the prefix slot is extis, the box use the slot's height to define `mn-box-prefix` div height.
    // If the prefix slot isn't extis, the box use the prefixHeight prop to define `mn-box-prefix` div height.
    this.prefixHeight = this.$slots.prefix && this.$slots.prefix.length > 0
      ? this.$slots.prefix[0].elm.offsetHeight
      : this.prefixHolder
  },
  beforeDestroy () {
    // Off all events.
    this.scrollerVNode.componentInstance.$off()
  }
}
</script>
