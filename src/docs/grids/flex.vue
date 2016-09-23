<template>
  <div>
    <section class="mn-section">
      <mn-card>
        <mn-card-heading>
          <mn-card-title>.cols & .col</mn-card-title>
          <mn-card-controls>
            <a href="#">show</a>
          </mn-card-controls>
        </mn-card-heading>
        <mn-card-block>
          <div class="mn-cols scoped-cols">
            <div class="mn-col is-green-bg"></div>
            <div class="mn-col is-blue-bg"></div>
            <div class="mn-col is-purple-bg"></div>
          </div>
        </mn-card-block>
      </mn-card>
    </section>

    <section class="mn-section">
      <mn-card>
        <mn-card-heading>
          <mn-card-title>.cols</mn-card-title>
        </mn-card-heading>
        <mn-card-block>
          <div class="mn-cols scoped-cols">
            <div class="mn-col is-yellow-bg"></div>
            <div class="mn-col is-2 is-orange-bg"></div>
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
    .mn-col {
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
