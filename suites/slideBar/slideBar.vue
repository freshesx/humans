<template>
  <div class="mn-slide-bar"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
    :style="{ height: `${itemsMaxHeight}px` }">
    <div class="mn-slide-bar-contents"
      :style="{
        transform: `translate(${computedLeft * -1}px, 0)`,
        'transition-duration': `${computedDuration}ms`
      }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Element from 'vue-human/utils/Element'

  export default new Element({
    name: 'mn-slide-bar',
    data () {
      return {
        touchStartX: 0,
        touchMoveX: 0,
        itemIndex: 0,
        items: [],
        moving: false,
        left: 0,
        // movedLeft: 0,
        finishedLeft: 0,
        touchStartLeft: 0,
        duration: 500
      }
    },
    computed: {
      itemsMaxHeight () {
        let height = 0
        this.items.forEach(item => {
          height = item.height > height ? item.height : height
        })
        return height
      },
      itemsMaxWidth () {
        let width = 0
        this.items.forEach(item => {
          width += item.width
        })
        return width
      },
      computedDuration () {
        return this.moving ? 0 : this.duration
      },
      computedLeft () {
        return this.moving
          ? this.left
          : this.finishedLeft
      }
    },
    methods: {
      // 记录开始 X 坐标，left 偏移值，进入触摸状态
      touchStart (event) {
        this.touchStartX = event.touches[0].pageX
        this.touchStartLeft = this.left
        this.moving = true
      },
      // 计算 move 的偏移值，计算在 left 上
      touchMove (event) {
        const minLeft = document.body.offsetWidth * -0.3
        const maxLeft = this.itemsMaxWidth - document.body.offsetWidth * 0.7

        this.touchMoveX = event.touches[0].pageX
        let left = this.touchStartLeft + (this.touchMoveX - this.touchStartX) * -1

        if (left < minLeft) left = minLeft
        if (left > maxLeft) left = maxLeft

        this.left = left
      },
      // 根据偏移值计算下一项或上一项，关闭触摸状态，更新最后的 left 值
      touchEnd (event) {
        const offset = this.touchMoveX - this.touchStartX
        if (offset > 80) this.prev()
        if (offset < -80) this.next()
        this.moving = false
        this.updateLeft()
      },
      next () {
        let itemIndex = this.itemIndex + 1
        if (itemIndex > this.items.length - 1) {
          itemIndex = this.items.length - 1
        }
        this.itemIndex = itemIndex
      },
      prev () {
        let itemIndex = this.itemIndex - 1
        if (itemIndex < 0) {
          itemIndex = 0
        }
        this.itemIndex = itemIndex
      },
      // 计算 finishedLft 可以进入的范围
      updateLeft () {
        let left = 0
        const minLeft = 0
        const maxLeft = this.itemsMaxWidth - document.body.offsetWidth
        const pickeds = this.items.slice(0, this.itemIndex)

        // 根据项目计算偏移位置
        pickeds.forEach(item => {
          left += item.width
        })

        // 控制最小值和最大值
        if (left < minLeft) left = minLeft
        if (left > maxLeft) left = maxLeft

        // 赋值
        this.left = left
        this.finishedLeft = left
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$children.forEach(vm => {
          this.items.push({
            width: vm.width,
            height: vm.height
          })
        })
      })
    }
  })
</script>

<style lang="scss">
  .mn-slide-bar {
    width: 100%;
    position: relative;
    overflow: hidden;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  .mn-slide-bar-contents {
    position: absolute;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-end;
  }
</style>
