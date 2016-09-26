<template>
  <div class="scrollbar-wrapper page-scrolls" v-el:wrapper @wheel="scroll">
    <div class="scrollbar-contents" v-el:contents :style="style">
      <slot></slot>
    </div>
    <scrollbar-vertical :wrapper="wrapper" :contents="contents" :y="y"></scrollbar-vertical>
  </div>
</template>
<script>
  import ScrollbarVertical from './scrollbar-vertical'
  export default {
    components: {
      ScrollbarVertical
    },
    methods: {
      scroll: function (event) {
        if (this.isOverflow) {
          const height = this.contents.height - this.wrapper.height
          this.y += event.deltaY
          if (this.y < 0) this.y = 0
          if (this.y > height) this.y = height
        }
      },
      resize: function () {
        this.wrapper.height = this.$get('$els.wrapper.clientHeight')
        this.contents.height = this.$get('$els.contents.clientHeight')
      }
    },
    computed: {
      style: function () {
        return { transform: `translateY(${this.y * -1}px)` }
      },
      isOverflow: function () {
        return this.contents.height > this.wrapper.height
      }
    },
    watch: {
      isOverflow: function (newValue) {
        if (!newValue) this.y = 0
      }
    },
    data () {
      return {
        y: 0,
        x: 0,
        interval: null,
        wrapper: {
          width: 0,
          height: 0
        },
        contents: {
          width: 0,
          height: 0
        }
      }
    },
    ready () {
      this.interval = setInterval(() => {
        this.resize()
      }, 1000)
    },
    beforeDestroy () {
      clearInterval(this.interval)
    }
  }
</script>
<style lang="scss" scoped>
  .scrollbar-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .scrollbar-contents {
  }
</style>
