<template>
  <div class="mn-dashboard-container">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-dashboard-container'
  })
</script>

<style lang="scss">
  @import "../../scss/vars";
  @import "../../scss/mixins/media";
  @import "./theme";

  .mn-dashboard-container {
    width: 100%;

    @include min-screen(tablet) {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    @media screen and (min-width: 1600px) {
      width: 1600px - $-dashboard-sidebar-width;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
