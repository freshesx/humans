<template>
  <div class="mn-container" :class="[{ 'is-fluid': fluid }]">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-container',
    props: {
      fluid: Boolean
    }
  })
</script>

<style lang="scss">
  @import "../../scss/mixins/media";
  @import "./vars";

  .mn-container {
    width: 100%;

    @include screen(tablet) {
      padding-left: $mn-container-grid-gutters;
      padding-right: $mn-container-grid-gutters;
    }

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

  .mn-container.is-fluid {
    width: 100%;

    @include min-screen(tablet) {
      padding-left: $mn-container-grid-gutters;
      padding-right: $mn-container-grid-gutters;
    }
  }
</style>
