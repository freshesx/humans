<template>
  <mn-scroller
    save
    scrollToTop>
    <div class="section">
      <mn-letter>
        <h1>Search Bar</h1>
        <small>btn, input</small>
      </mn-letter>
      <demo-search-bar></demo-search-bar>
    </div>
  </mn-scroller>
</template>

<script>
  import DemoSearchBar from './search'

  export default {
    components: {
      DemoSearchBar
    }
  }
</script>
