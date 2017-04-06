<template>
  <div class="mn-container" :class="{}">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/Element'

  export default new Element({
    name: 'mn-container'
  })
</script>

<style lang="scss">
  @import "../../scss/vars";
  @import "../../scss/mixins/media";

  .mn-container {
    width: 100%;

    @include min-screen(desktop) {
      width: media-breakpoint-get(desktop);
      margin-left: auto;
      margin-right: auto;
    }

    @include min-screen(widescreen) {
      width: media-breakpoint-get(widescreen);
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
