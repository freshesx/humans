<template>
  <div class="section">
    <div class="letter">
      <div class="letter-body">
        <h1>Bar</h1>
        <small>btn, input</small>
      </div>
    </div>

    <demo-tab></demo-tab>

    <demo-search></demo-search>

  </div>
</template>

<script>
  import DemoTab from './tab'
  import DemoSearch from './search'

  export default {
    components: {
      DemoTab,
      DemoSearch
    }
  }
</script>
