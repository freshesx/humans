<template>
  <div class="scrollbar-vertical" v-show="isShow">
    <div class="scrollbar-bar" :style="style"></div>
  </div>
</template>
<script>
  export default {
    props: {
      wrapper: {
        type: Object,
        default: {
          height: 1, width: 1
        }
      },
      contents: {
        type: Object,
        default: {
          height: 1, width: 1
        }
      },
      y: {
        type: Number,
        default: 0
      }
    },
    methods: {
      setTimeout: function () {
        if (this.timeout) clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.isShow = false
          clearTimeout(this.timeout)
        }, 1000)
      }
    },
    computed: {
      style: function () {
        const length = this.wrapper.height / this.contents.height * this.wrapper.height
        const offset = this.wrapper.height / this.contents.height * this.y
        return {
          height: `${length}px`,
          transform: `translateY(${offset}px)`
        }
      }
    },
    watch: {
      y: function (newValue) {
        this.isShow = true
        this.setTimeout()
      }
    },
    data () {
      return {
        isShow: false,
        timeout: null
      }
    }
  }
</script>
<style lang="scss" scoped>
  .scrollbar-bar {
    width: 100%;
    background: rgba(0,0,0,.5);
    border-radius: 20px;
  }
  .scrollbar-vertical {
    position: absolute;
    right: 0;
    top: 0;
    width: 9px;
    padding-right: 2px;
    height: 100%;
  }
</style>