<template>
  <mn-scroller
    save
    scrollToTop>
    <div class="section">
      <div class="letter">
        <div class="letter-body">
          <h1>Loading</h1>
          <small>Loading component</small>
        </div>
      </div>

      <demo-loading></demo-loading>

    </div>
  </mn-scroller>
</template>

<script>
  import DemoLoading from './loading'

  export default {
    components: {
      DemoLoading
    }
  }
</script>
