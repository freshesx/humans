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
          <div class="mn-cols">
            <div class="mn-col is-sm-1" v-for="i in cols12">
              <div class="sp-holder is-purple-bg"></div>
            </div>
          </div>
        </mn-card-block>
      </mn-card>
    </section>

    <section class="mn-section">
      <mn-card>
        <mn-card-heading>
          <mn-card-title>.cols & .col</mn-card-title>
          <mn-card-controls>
            <a href="#">show</a>
          </mn-card-controls>
        </mn-card-heading>
        <mn-card-block>
          <div class="mn-cols">
            <div class="mn-col is-sm-4">
              <div class="sp-holder is-green-bg">
                .mn-col .is-sm-4 .is-green-bg
              </div>
            </div>
            <div class="mn-col is-sm-4">
              <div class="sp-holder is-blue-bg">
                mn-col is-sm-4 is-blue-bg
              </div>
            </div>
            <div class="mn-col is-sm-4">
              <div class="sp-holder is-purple-bg">
                mn-col is-sm-4 is-blue-bg
              </div>
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
            <div class="mn-col is-sm-4">
              <div class="sp-holder is-yellow-bg">
                mn-col is-sm-4 is-yellow-bg
              </div>
            </div>
            <div class="mn-col is-sm-8">
              <div class="sp-holder is-orange-bg">
                mn-col is-sm-8 is-orange-bg
              </div>
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
            <div class="mn-col is-sm-4">
              <div class="sp-holder is-yellow-bg">
                mn-col is-sm-4 is-yellow-bg
              </div>
            </div>
            <div class="mn-col is-sm-8">
              <div class="sp-holder is-orange-bg">
                mn-col is-sm-8 is-orange-bg
              </div>
            </div>
          </div>
        </mn-card-block>
      </mn-card>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        cols12: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";

  .sp-holder {
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    color: #fff;
    border-radius: $base-radius;
  }
</style>
