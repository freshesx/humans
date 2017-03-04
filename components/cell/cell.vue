<template>
  <card>
    <!-- 如果隐藏多选功能，并且 action 的 slot 不存在的话，则不显示 -->
    <card-item v-if="!hideSelections || $slots.action">
      <!-- 如果隐藏多选功能，则不显示，并且当加载的时候，选中数量和图标变为未选中 -->
      <card-prefix v-if="!hideSelections">
        <cell-icon :checked="!loading && isAllChecked" @click.native="select"></cell-icon>
        全选
        ({{ loading ? 0 : selections.length }})
      </card-prefix>
      <slot name="action"></slot>
    </card-item>
    <!-- 当加载的时候，显示加载条，关闭其他的渲染 -->
    <card-item v-if="loading">
      <card-body :class="'has-center-text'">
        <loading-icon></loading-icon>
      </card-body>
    </card-item>
    <!-- 当没有一个记录时，则显示提示 -->
    <card-item v-if="contents.length === 0 && !loading">
      <card-body :class="'has-center-text'">
        <p>没有找到合适的记录</p>
      </card-body>
    </card-item>
    <!-- default 的 slot 区域，外部调用时，请使用 "template slot"!! 插槽 -->
    <slot :item="item" v-for="item in contents" v-if="!loading"></slot>
  </card>
</template>

<script>
  import Element from '../../util/element'
  import Card from '../card/card'
  import CardItem from '../card/card-item'
  import CardPrefix from '../card/card-prefix'
  import CardBody from '../card/card-body'
  import LoadingIcon from '../loading-icon/loading-icon'
  import CellIcon from './cell-icon'

  export default new Element({
    name: 'mn-cell',
    components: {
      CellIcon,
      Card,
      CardItem,
      CardPrefix,
      CardBody,
      LoadingIcon
    },
    props: {
      contents: {
        type: Array,
        default: () => []
      },
      keepSelections: {
        type: Boolean,
        default: false
      },
      hideSelections: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        loading: false,
        selections: []
      }
    },
    methods: {
      /**
       * 便于动画的加载和使用的方法
       * this.$refs.cell.update(next => {
       *   // 处理你的逻辑
       *   next()  // 通知 cell 加载结束
       * })
       * @param {Function} callback - 回调函数
       */
      update (callback) {
        this.loading = true
        callback.apply(this, [this.next])
      },
      /**
       * 关闭加载状态
       */
      next () {
        this.loading = false
      },
      /**
       * 对比 selections，切换加入还是删除
       * @param {*} item
       */
      toggleSelection (item) {
        let index = this.selections.indexOf(item)

        if (index > -1) {
          this.selections.splice(index, 1)
        } else {
          this.selections.push(item)
        }
      },
      /**
       * 清除选中数组
       */
      clearSelections () {
        this.selections = []
      },
      /**
       * 全选的点击事件
       */
      select () {
        if (this.isAllChecked) {
          // 清除
          this.clearSelections()
        } else {
          // 全部添加
          this.contents.forEach(item => {
            if (!this.selections.includes(item)) {
              this.selections.push(item)
            }
          })
        }
      }
    },
    computed: {
      isAllChecked () {
        // 如果长度为 0 ，则代表没东西可选
        if (this.contents.length === 0) return false
        // 对比 selections 和 contents，
        // contents 中的每一项都存在于 selections，则为全选中
        return this.contents.every(item => this.selections.includes(item))
      }
    },
    watch: {
      contents (newValue) {
        // 当 contents 数据刷新时，应该重置 selections
        if (!this.keepSelections) {
          this.clearSelections()
        }
      }
    }
  })
</script>

<style lang="scss">
  // component scss
</style>
