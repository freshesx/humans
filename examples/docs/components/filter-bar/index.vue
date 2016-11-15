<template>
  <mn-filter-bar shadow>
    <mn-filter-bar-item arrow @filter-opened="openSortPanel" @filter-closed="closeSortPanel">
      综合排序
    </mn-filter-bar-item>
    <mn-filter-bar-item>
      销量优先
    </mn-filter-bar-item>
    <mn-filter-bar-item>
      <mn-icon name="ios-grid-view"></mn-icon>
    </mn-filter-bar-item>
    <mn-filter-bar-item bordered>
      筛选 <mn-icon name="ios-settings"></mn-icon>
    </mn-filter-bar-item>
  </mn-filter-bar>
</template>

<script>
  import SortPanel from './sort-panel'

  export default {
    methods: {
      openSortPanel () {
        this.sortPanel = this.$human.popup(SortPanel)
        this.sortPanel.show = true
      },
      closeSortPanel () {
        if (this.sortPanel) {
          this.sortPanel.show = false
        }
      }
    },
    data () {
      return {
        sortPanel: undefined
      }
    }
  }
</script>
