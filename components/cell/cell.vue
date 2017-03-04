<template>
  <mn-card>
    <!-- 如果隐藏多选功能，并且 action 的 slot 不存在的话，则不显示 -->
    <mn-card-item v-if="!hideSelections || $slots.action">
      <!-- 如果隐藏多选功能，则不显示，并且当加载的时候，选中数量和图标变为未选中 -->
      <mn-card-prefix v-if="!hideSelections">
        <cell-icon :checked="!loading && isAllChecked" @click.native="select"></cell-icon>
        全选
        ({{ loading ? 0 : selections.length }})
      </mn-card-prefix>
      <slot name="action"></slot>
    </mn-card-item>
    <!-- 当加载的时候，显示加载条，关闭其他的渲染 -->
    <mn-card-item v-if="loading">
      <mn-card-body :class="'has-center-text'">
        <mn-loading-icon></mn-loading-icon>
      </mn-card-body>
    </mn-card-item>
    <!-- 当没有一个记录时，则显示提示 -->
    <mn-card-item v-if="contents.length === 0 && !loading">
      <mn-card-body :class="'has-center-text'">
        <p>没有找到合适的记录</p>
      </mn-card-body>
    </mn-card-item>
    <!-- default 的 slot 区域，外部调用时，请使用 "template slot"!! 插槽 -->
    <slot :item="item" v-for="item in contents" v-if="!loading"></slot>
  </mn-card>
</template>

<script>
  import Element from '../../util/element'
  import CellIcon from './cell-icon'

  export default new Element({
    name: 'mn-cell',
    components: {
      CellIcon
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
      update (callback) {
        this.loading = true
        callback.apply(this, [this.next])
      },
      next () {
        this.loading = false
      },
      toggleSelection (item) {
        let index = this.selections.indexOf(item)

        if (index > -1) {
          this.selections.splice(index, 1)
        } else {
          this.selections.push(item)
        }
      },
      clearSelections () {
        this.selections = []
      },
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
        if (this.contents.length === 0) return false
        return this.contents.every(item => this.selections.includes(item))
      }
    },
    watch: {
      contents (newValue) {
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
