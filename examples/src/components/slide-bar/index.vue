<template>
  <docs-layout-page>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Slide Box</h1>
          <small></small>
        </mn-letter-body>
      </mn-letter>
      <demo-slide-bar></demo-slide-bar>
    </mn-section>
  </docs-layout-page>
</template>

<script>
  import DemoSlideBar from './slide-bar'

  export default {
    components: {
      DemoSlideBar
    }
  }
</script>
