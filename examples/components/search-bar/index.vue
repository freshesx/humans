<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <mn-section>
            <mn-letter>
              <h1>Search Bar</h1>
              <small>btn, input</small>
            </mn-letter>
            <demo-search-bar></demo-search-bar>
          </mn-section>
        </mn-scroller>
      </mn-row>
    </mn-rows>
  </transition>
</template>

<script>
  import DemoSearchBar from './search'

  export default {
    components: {
      DemoSearchBar
    }
  }
</script>
