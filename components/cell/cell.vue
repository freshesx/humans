<template>
  <mn-card>
    <mn-card-item>
      <mn-card-prefix>
        <cell-icon :checked="!loading && isAllChecked" @click.native="select"></cell-icon>
        全选
        ({{ loading ? 0 : selections.length }})
      </mn-card-prefix>
    </mn-card-item>
    <mn-card-item v-if="loading">
      <mn-card-body :class="'has-center-text'">
        <mn-loading-icon></mn-loading-icon>
      </mn-card-body>
    </mn-card-item>
    <mn-card-item v-if="contents.length === 0 && !loading">
      <mn-card-body :class="'has-center-text'">
        <p>没有找到合适的记录</p>
      </mn-card-body>
    </mn-card-item>
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
