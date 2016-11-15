<template>
  <mn-scroller
    save
    scrollToTop>
    <div class="section">
      <div class="letter">
        <div class="letter-body">
          <h1>Tag</h1>
          <small>Tag</small>
        </div>
      </div>

      <demo-tag></demo-tag>

    </div>
  </mn-scroller>
</template>

<script>
  import DemoTag from './tag'

  export default {
    components: {
      DemoTag
    }
  }
</script>
