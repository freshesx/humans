<template>
  <div>
    <section class="scoped-tile">
      <div class="cols">
        <div class="col bg-green"></div>
        <div class="col bg-blue"></div>
        <div class="col bg-purple"></div>
      </div>
    </section>

    <section class="scoped-tile">
      <div class="cols">
        <div class="col bg-yellow"></div>
        <div class="col is-2 bg-orange"></div>
      </div>
    </section>

    <section class="scoped-tile">
      <div class="cols is-gapless">
        <div class="col bg-yellow"></div>
        <div class="col is-2 bg-orange"></div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";

  .scoped-tile {
    background: $gray-bg;
    border-radius: $base-radius;
    height: 18rem;
    margin: $grid-gutters;
    padding: $grid-gutters;

    .col {
      height: 18rem - $grid-gutters * 2;
      border-radius: $base-radius;
    }
  }
</style>
