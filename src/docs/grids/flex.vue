<template>
  <div>
    <section class="section">
      <mn-card>
        <mn-card-heading>
          <mn-card-title>.cols & .col</mn-card-title>
          <mn-card-controls>
            <a href="#">show</a>
          </mn-card-controls>
        </mn-card-heading>
        <mn-card-block>
          <div class="cols scoped-cols">
            <div class="col bg-green"></div>
            <div class="col bg-blue"></div>
            <div class="col bg-purple"></div>
          </div>
        </mn-card-block>
      </mn-card>
    </section>

    <section class="section">
      <mn-card>
        <mn-card-heading>
          <mn-card-title>.cols</mn-card-title>
        </mn-card-heading>
        <mn-card-block>
          <div class="cols scoped-cols">
            <div class="col bg-yellow"></div>
            <div class="col is-2 bg-orange"></div>
          </div>
        </mn-card-block>
      </mn-card>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";

  .scoped-cols {
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
