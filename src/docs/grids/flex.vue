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
            <div class="mn-col is-sm-4 is-green-bg">
              .mn-col .is-sm-4 .is-green-bg
            </div>
            <div class="mn-col is-sm-4 is-blue-bg">
              mn-col is-sm-4 is-blue-bg
            </div>
            <div class="mn-col is-sm-4 is-purple-bg">
              mn-col is-sm-4 is-blue-bg
            </div>
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
            <div class="mn-col is-sm-4 is-yellow-bg">
              mn-col is-sm-4 is-yellow-bg
            </div>
            <div class="mn-col is-sm-8 is-orange-bg">
              mn-col is-sm-8 is-orange-bg
            </div>
          </div>
        </mn-card-block>
      </mn-card>
    </section>

    <section class="mn-section">
      <mn-card>
        <mn-card-heading>
          <mn-card-title>.cols.is-gapless</mn-card-title>
        </mn-card-heading>
        <mn-card-block>
          <div class="mn-cols is-gapless scoped-cols">
            <div class="mn-col is-sm-4 is-yellow-bg">
              mn-col is-sm-4 is-yellow-bg
            </div>
            <div class="mn-col is-sm-8 is-orange-bg">
              mn-col is-sm-8 is-orange-bg
            </div>
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
      height: 5rem - $grid-gutters * 2;
      color: #fff;
      // text-align: center;
      line-height: 3rem;
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
