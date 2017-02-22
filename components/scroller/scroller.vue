<template>
  <div
    class="mn-scroller"
    :class="{ 'is-bar': scrollbar }"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
    @scroll="scroll">
    <div class="mn-scroller-contents">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Element from '../../util/element'
  import { addStorage, getScrollTop } from './storage'
  import popupStorage from '../../util/popup/storage'

  export default new Element({
    name: 'mn-scroller',
    props: {
      save: {
        type: Boolean,
        default: true
      },
      name: {
        type: String,
        default: 'default'
      },
      mode: {
        type: String,
        default: 'path',
        validator: val => ['path', 'fullPath'].includes(val)
      },
      scrollbar: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        time: undefined,
        createdScrollTop: false
      }
    },
    methods: {
      touchStart (event) {
        // 监听 touchstart 事件，记录开始前的 pageX 和 pageY
        // 触发组件 touchstart 事件
        this.startPageY = event.touches[0].pageY
        this.startPageX = event.touches[0].pageX
        this.$emit('touchstart', event, this)
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
        this.$emit('touchmove', event, this)
      },
      touchEnd (event) {
        this.scrollAndTouchEnd(event)
        this.$emit('touchend', event, this)
      },
      scroll (event) {
        this.scrollAndTouchEnd(event)
        this.$emit('scroll', event, this)
      },
      scrollAndTouchEnd (event) {
        this.saveScrollTop()

        // 拉到顶部，触发事件
        if (this.$el.scrollTop <= 0) {
          this.$emit('top', event, this)
        }

        // 拉到底部，触发事件
        if (this.$el.offsetHeight >= this.$el.scrollHeight - this.$el.scrollTop) {
          this.$emit('bottom', event, this)
        }
      },
      getRoutePath () {
        return this.$route[this.mode]
      },
      createScrollTop () {
        // 必须依赖 $route
        // 是否设置
        if (!this.$route || !this.save) return
        // 获取 scrollTop，并且设置修改过 scrollTop
        this.$el.scrollTop = getScrollTop(this.getRoutePath(), this.name)
        this.createdScrollTop = true
      },
      saveScrollTop () {
        // 必须依赖 $route
        // 是否储存
        // 是否初始过 scrollTop
        if (!this.$route || !this.save || !this.createdScrollTop) return
        // 储存 scrollTop
        addStorage(this.getRoutePath(), this.name, this.$el.scrollTop)
      }
    },
    beforeDestroy () {
      // 设定一个容器存储所有的 popup，离开当前页面时自动关闭
      popupStorage.items().forEach(item => {
        item.show = false
      })
    },
    mounted () {
      // 初始化 scrollTop
      this.createScrollTop()
    }
  })
</script>

<style lang="scss">
  .mn-scroller {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    // &-contents {
    // }

    &.is-x {
      position: relative;
      overflow: hidden;
      overflow-x: auto;
    }
  }

  .is-windows {
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    .mn-scroller.is-bar {
      &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }

      &::-webkit-scrollbar-track {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.6);
      }

      &::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.2);
      }
    }
  }
</style>
