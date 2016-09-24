<template>
  <div>
    <section class="section">
      <div class="card">
        <div class="card-header">
          <div class="card-title">.cols & .col</div>
          <div class="card-controls">
            <a href="#">show</a>
          </div>
        </div>
        <div class="card-block">
          <div class="cols">
            <div class="col is-sm-1" v-for="i in cols12">
              <div class="sp-holder is-purple-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="card">
        <div class="card-header">
          <div class="card-title">.cols & .col</div>
          <div class="card-controls">
            <a href="#">show</a>
          </div>
        </div>
        <div class="card-block">
          <div class="cols">
            <div class="col is-sm-4">
              <div class="sp-holder is-green-bg">
                .mn-col .is-sm-4 .is-green-bg
              </div>
            </div>
            <div class="col is-sm-4">
              <div class="sp-holder is-blue-bg">
                mn-col is-sm-4 is-blue-bg
              </div>
            </div>
            <div class="col is-sm-4">
              <div class="sp-holder is-purple-bg">
                mn-col is-sm-4 is-blue-bg
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="card">
        <div class="card-header">
          <div class="card-title">.cols</div>
        </div>
        <div class="card-block">
          <div class="cols scoped-cols">
            <div class="col is-sm-4">
              <div class="sp-holder is-yellow-bg">
                mn-col is-sm-4 is-yellow-bg
              </div>
            </div>
            <div class="col is-sm-8">
              <div class="sp-holder is-orange-bg">
                mn-col is-sm-8 is-orange-bg
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="card">
        <div class="card-header">
          <div class="card-title">.cols.is-gapless</div>
        </div>
        <div class="card-block">
          <div class="cols is-gapless scoped-cols">
            <div class="col is-sm-4">
              <div class="sp-holder is-yellow-bg">
                mn-col is-sm-4 is-yellow-bg
              </div>
            </div>
            <div class="col is-sm-8">
              <div class="sp-holder is-orange-bg">
                mn-col is-sm-8 is-orange-bg
              </div>
            </div>
          </div>
        </div>
      </div>
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
