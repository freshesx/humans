<template>
  <div class="mn-slide-bar"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
    :style="{ height: `${itemsMaxHeight}px` }">
    <div class="mn-slide-bar-contents"
      :style="{ transform: `translate(${this.left * -1}px, 0)` }">
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
        left: 0
      }
    },
    computed: {
      itemsMaxHeight () {
        let height = 0
        this.items.forEach(item => {
          height = item.height > height ? item.height : height
        })
        return height
      }
    },
    methods: {
      touchStart (event) {
        this.touchStartX = event.touches[0].pageX
      },
      touchMove (event) {
        this.touchMoveX = event.touches[0].pageX
      },
      touchEnd (event) {
        const offset = this.touchMoveX - this.touchStartX
        if (offset > 80) this.prev()
        if (offset < -80) this.next()
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
      updateLeft () {
        let left = 0
        const pickeds = this.items.slice(0, this.itemIndex)
        pickeds.forEach(item => {
          left += item.width
        })
        this.left = left
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
