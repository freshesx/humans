<template>
  <div>
    <section class="section scoped-tile">
      <div class="card">
        <div class="card-heading">
          <div class="card-icon">A</div>
          <h3 class="card-title">.cols .is-gap</h3>
          <div class="card-controls">
            show
          </div>
        </div>
        <div class="card-block">
          <div class="cols is-gap">
            <div class="col bg-green"></div>
            <div class="col bg-blue"></div>
            <div class="col bg-purple"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section scoped-tile">
      <div class="card">
        <div class="card-heading">
          <h3 class="card-title">.cols .col .is-2</h3>
        </div>
        <div class="card-block">
          <div class="cols is-gap">
            <div class="col bg-yellow"></div>
            <div class="col is-2 bg-orange"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section scoped-tile">
      <div class="card">
        <div class="card-heading">
          <h3 class="card-title">.cols</h3>
        </div>
        <div class="card-block">
          <div class="cols is-gapless">
            <div class="col bg-blue"></div>
            <div class="col is-2 bg-green"></div>
          </div>
        </div>
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
    .col {
      height: 18rem - $grid-gutters * 2;
      &:first-child {
        border-top-left-radius: $base-radius;
        border-bottom-left-radius: $base-radius;
      }
      &:last-child {
        border-top-right-radius: $base-radius;
        border-bottom-right-radius: $base-radius;
      }
    }
  }
</style>
