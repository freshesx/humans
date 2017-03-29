<template>
  <card>
    <!-- 如果隐藏多选功能，并且 action 的 slot 不存在的话，则不显示 -->
    <card-item v-if="!hideSelections || $slots.action || $slots.title" type="cursor">
      <!-- 如果隐藏多选功能，则不显示，并且当加载的时候，选中数量和图标变为未选中 -->
      <card-prefix v-if="!hideSelections">
        <cell-icon :checked="!loading && isAllChecked" @click.native.stop="onAddSelections"></cell-icon>
      </card-prefix>
      <card-prefix v-if="!hideSelections">
        {{ $t('mn.cell.allSelectedText') }}
        ({{ loading ? 0 : selections.length }})
      </card-prefix>
      <!-- 顶部的中间区域 -->
      <slot name="title">
        <card-body></card-body>
      </slot>
      <!-- 顶部的后部区域 -->
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
        <p>{{ $t('mn.cell.noDataText') }}</p>
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
      },
      selections: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data () {
      return {
        loading: false
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
        const selections = this.selections.concat([])

        let index = selections.indexOf(item)

        if (index > -1) {
          selections.splice(index, 1)
        } else {
          selections.push(item)
        }

        this.emitSelections(selections)
      },
      /**
       * 清除选中数组
       */
      clearSelections () {
        this.emitSelections([])
      },
      /**
       * 全选的点击事件
       */
      onAddSelections () {
        if (this.isAllChecked) {
          // 清除
          this.clearSelections()
        } else {
          // 全部添加
          const selections = this.contents.concat([])
          this.emitSelections(selections)
        }
      },
      /**
       * 触发修改 selections
       */
      emitSelections (selections) {
        this.$emit('selections', selections)
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
