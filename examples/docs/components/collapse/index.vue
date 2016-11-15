<template>
  <mn-scroller
    save
    scrollToTop>
    <div class="section">

      <div class="letter">
        <div class="letter-body">
          <h1>Collapse</h1>
          <small>Collapse</small>
        </div>
      </div>

      <demo-collapse></demo-collapse>

    </div>
  </mn-scroller>
</template>

<script>
  import DemoCollapse from './collapse'

  export default {
    components: {
      DemoCollapse
    }
  }
</script>
