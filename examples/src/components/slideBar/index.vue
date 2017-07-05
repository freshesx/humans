<template>
  <page>
    <mn-letter>
      <mn-letter-body>
        <h1>Slide Bar</h1>
      </mn-letter-body>
    </mn-letter>

    <mn-section>
      <mn-slide-bar>
        <mn-slide-bar-item>
          <img class="image" src="https://ois1yok9v.qnssl.com/home-banner-1.jpg">
        </mn-slide-bar-item>
        <mn-slide-bar-item>
          <img class="image" src="https://ois1yok9v.qnssl.com/home-banner-2.jpg">
        </mn-slide-bar-item>
        <mn-slide-bar-item>
          <img class="image" src="https://ois1yok9v.qnssl.com/home-banner-3.jpg">
        </mn-slide-bar-item>
      </mn-slide-bar>
    </mn-section>
  </page>
</template>

<script>
  import slideBar from 'vue-human/suites/slideBar'

  export default {
    components: {
      ...slideBar.map()
    }
  }
</script>

<style lang="scss" scoped>
  .image {
    display: block;
    width: 200px;
    margin-left: 1rem;
  }
</style>
