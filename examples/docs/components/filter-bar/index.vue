<template>
  <mn-filter-bar shadow>
    <mn-filter-bar-item arrow active>
      综合排序
    </mn-filter-bar-item>
    <mn-filter-bar-item>
      销量优先
    </mn-filter-bar-item>
    <mn-filter-bar-item @btn-click="changeView">
      <mn-icon name="ios-grid-view"></mn-icon>
    </mn-filter-bar-item>
    <mn-filter-bar-item bordered>
      筛选 <mn-icon name="ios-settings"></mn-icon>
    </mn-filter-bar-item>
  </mn-filter-bar>
</template>

<script>
  export default {
    methods: {
      changeView () {
        console.log('changeView')
      }
    }
  }
</script>
