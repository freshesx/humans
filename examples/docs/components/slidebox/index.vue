<template>
  <mn-scroller
    save
    scrollToTop>
    <div class="section">
      <mn-letter>
        <h1>Slide Box</h1>
        <small></small>
      </mn-letter>
      <demo-slide-box></demo-slide-box>
    </div>
  </mn-scroller>
</template>

<script>
  import DemoSlideBox from './slidebox'

  export default {
    components: {
      DemoSlideBox
    }
  }
</script>
