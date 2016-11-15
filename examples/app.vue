<template>
  <mn-rows>
    <mn-row fixed visible>
      <demo-filter-bar></demo-filter-bar>
    </mn-row>
    <mn-row>
      <router-view></router-view>
    </mn-row>
  </mn-rows>
</template>

<script>
  import DemoFilterBar from './docs/components/filter-bar'

  export default {
    components: {
      DemoFilterBar
    }
  }
</script>
