<template>
  <div class="mn-dashboard">
    <div class="mn-dashboard-header">
      <div class="mn-dashboard-brand">
        <slot name="brand"></slot>
      </div>
      <div class="mn-dashboard-nav">
        <slot name="nav"></slot>
      </div>
    </div>
    <div class="mn-dashboard-body">
      <div class="mn-dashboard-side">
        <slot name="side"></slot>
      </div>
      <div class="mn-dashboard-main">
        <slot></slot>
      </div>
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

  $-dashboard-side-width: 220px;

  .mn-dashboard {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .mn-dashboard-header {
    flex-shrink: 1;
    height: 60px;
    background: $blue;
    display: flex;

    @include min-screen(desktop) {
      background: linear-gradient(90deg, $blue, $blue 45%, $green);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
  }

  .mn-dashboard-body {
    flex: 1;
    display: flex;
  }

  .mn-dashboard-side {
    background: #fff;
    position: absolute;
    top: 100px;
    left: 1rem;
    right: 1rem;
    bottom: 0;
    box-shadow: 0 20px 10px rgba(0, 0, 0, 0.1);
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
    z-index: 200;

    @include min-screen(desktop) {
      position: relative;
      width: $-dashboard-side-width;
      box-shadow: none;
      border-radius: 0;
      top: 0;
      left: 0;
    }
  }

  .mn-dashboard-main {
    position: relative;
    flex: 1;
  }
</style>
