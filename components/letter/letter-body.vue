<template>
  <div class="mn-letter-body">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-letter-body'
  }
</script>

<style lang="scss">
  @import "../../scss/vars";
  @import "../../scss/mixins/media";

  .mn-letter-body {
    flex: 1;
    margin: $grid-gutters;

    @include screen('mobile') {
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>
