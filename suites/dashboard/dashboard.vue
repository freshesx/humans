<template>
  <div class="mn-dashboard">
    <!-- Header -->
    <div class="mn-dashboard-header">
      <slot name="brand"></slot>
    </div>
    <!-- Body -->
    <div class="mn-dashboard-mainarea">
      <slot name="sideBar"></slot>
      <slot></slot>
    </div>
    <!-- footer -->
    <div class="mn-dashboard-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-dashboard'
  })
</script>

<style lang="scss">
  @import "../../scss/vars.scss";
  @import "../../scss/mixins/media.scss";

  .mn-dashboard {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .mn-dashboard-header {
    display: none;

    @include min-screen(desktop) {
      display: flex;
      justify-content: space-between;
      flex-shrink: 1;
      height: 60px;
      background: $blue;
      background: linear-gradient(90deg, $blue, $blue 45%, $green);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
  }

  .mn-dashboard-mainarea {
    flex: 1;
    display: flex;
  }
</style>
