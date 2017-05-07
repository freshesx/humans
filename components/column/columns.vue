<template>
  <div class="mn-columns">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/Element'

  export default new Element({
    name: 'mn-columns',
    methods: {
      setSpans () {
        const storage = []
        const length = this.$children.length
        let lastStorage = []
        let lastSpans = 0

        this.$children.forEach((child, index) => {
          // console.log(child._uid)
          // 第一个默认添加
          // if (lastSpans === 0) {
          //   lastStorage.push(child)
          //   lastSpans += child.columnConfig.span
          // } else
          // if (lastSpans + child.columnConfig.span <= 12) {
          //   // 第二个预判是否小于等于 12，true 则添加，false 则清空后添加
          //   // lastStorage.push(child)
          //   // lastSpans += child.columnConfig.span
          // } else {
          //   // 赋值给总的
          //   storage.push([...lastStorage])
          //   // 清空
          //   lastStorage = []
          //   lastSpans = 0
          //   // 重新赋值
          //   // lastStorage.push(child)
          //   // lastSpans += child.columnConfig.span
          // }
          // console.log(child.columnConfig.span, child.columnConfig.span + child.columnConfig.offset)
          const span = child.columnConfig.span
          const offset = child.columnConfig.offset ? child.columnConfig.offset : 0

          if (lastSpans + span + offset > 12) {
            storage.push([...lastStorage])
            lastStorage = []
            lastSpans = 0
          }

          lastStorage.push(child)
          lastSpans += (span + offset)

          // 最后一个默认再给一次总的数组
          if (length - 1 === index) {
            storage.push([...lastStorage])
          }
          // @todo 全部完成后清空
        })

        // console.log(storage)
        storage.forEach(items => {
          items.forEach(item => {
            item.clearLeftPadding = false
            item.clearRightPadding = false
          })
          items[0].clearLeftPadding = true
          items[items.length - 1].clearRightPadding = true
        })
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.setSpans()
        window.addEventListener('resize', this.setSpans)
      })
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.setSpans)
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-columns {
    display: flex;
    // margin: 0 $grid-gutters * -0.5;
    flex-wrap: wrap;
  }
</style>
