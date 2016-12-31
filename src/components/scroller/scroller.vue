<template>
  <div
    :class="[ `${cssPrefix}scroller`, { 'is-save': save } ]"
    @touchstart="touchStart"
    @touchmove="touchMove">
    <div :class="[ `${cssPrefix}scroller-contents` ]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mn-scroller',
    props: {
      save: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    methods: {
      touchStart (event) {
        this.startPageY = event.touches[0].pageY
        this.startPageX = event.touches[0].pageX
      },
      touchMove (event) {
        let pageY = event.touches[0].pageY
        let scrollTop = this.$el.scrollTop
        let scrollHeight = this.$el.scrollHeight
        let containerHeight = this.$el.offsetHeight

        // 允许侧边栏手势进行返回
        if (this.startPageX > 16) {
          // 上面露底
          if (pageY > this.startPageY && scrollTop <= 0) {
            event.preventDefault()
          }

          // 下面露底
          if (pageY < this.startPageY && scrollTop >= scrollHeight - containerHeight) {
            event.preventDefault()
          }
        }
      }
    }
  }
</script>
