<template>
  <layout>
    <mn-scroller>
      <div class="body-box">
        Dashboard Body
      </div>
    </mn-scroller>
  </layout>
</template>

<script>
  import core from 'vue-human/suites/core'
  import layout from './layout'

  export default {
    components: {
      ...core.map(),
      layout
    }
  }
</script>

<style lang="scss" scoped>
  .body-box {
    position: absolute;
    top: 46%;
    left: 50%;
    font-size: 3.6rem;
    color: rgba(0, 0, 0, 0);
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transform: translate(-50%, -50%);
  }
</style>
