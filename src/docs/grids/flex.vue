<template>
  <div class="section" transition="is-slide-left">

    <div class="letter">
      <div class="letter-body">
        <h1>Flex</h1>
        <small>cols, col</small>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="card-title">Flex column</div>
      </div>
      <div class="card-block">
        <div class="cols">
          <div class="col is-xs-3" v-for="i in [1, 2, 3, 4]">
            <div class="sp-holder is-purple-bg"></div>
          </div>
          <div class="col is-xs-4" v-for="i in [1, 2, 3]">
            <div class="sp-holder is-purple-bg"></div>
          </div>
          <div class="col is-xs-12">
            <div class="sp-holder is-purple-bg"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="card-title">Gapless</div>
      </div>
      <div class="card-block">
        <div class="cols">
          <div class="col is-xs-4">
            <div class="sp-holder is-yellow-bg">
              is-xs-4
            </div>
          </div>
          <div class="col is-xs-8">
            <div class="sp-holder is-orange-bg">
              is-xs-8
            </div>
          </div>
        </div>
        <div class="cols is-gapless">
          <div class="col is-xs-4">
            <div class="sp-holder sp-left-gapless is-yellow-bg">
              is-xs-4
            </div>
          </div>
          <div class="col is-xs-8">
            <div class="sp-holder sp-right-gapless is-orange-bg">
              is-xs-8
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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
    margin-bottom: 0.5rem;
  }

  .sp-left-gapless,
  .sp-right-gapless {
    border-radius: 0;
  }

  .sp-left-gapless {
    border-top-left-radius: $base-radius;
    border-bottom-left-radius: $base-radius;
  }

  .sp-right-gapless {
    border-top-right-radius: $base-radius;
    border-bottom-right-radius: $base-radius;
  }
</style>
