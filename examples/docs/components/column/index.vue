<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <div class="section">

            <mn-letter>
              <h1>Flex</h1>
              <small>cols, col</small>
            </mn-letter>

            <mn-card>
              <mn-card-item>Flex column</mn-card-item>
              <mn-card-item>
                <mn-cols>
                  <mn-col query="xs-3" v-for="i in [1, 2, 3, 4]">
                    <div class="sp-holder is-purple-bg"></div>
                  </mn-col>
                  <mn-col query="xs-4" v-for="i in [1, 2, 3]">
                    <div class="sp-holder is-purple-bg"></div>
                  </mn-col>
                  <mn-col query="xs-12">
                    <div class="sp-holder is-purple-bg"></div>
                  </mn-col>
                </mn-cols>
              </mn-card-item>
            </mn-card>

            <mn-card>
              <mn-card-item>Gapless</mn-card-item>
              <mn-card-item>
                <mn-cols>
                  <mn-col query="xs-4">
                    <div class="sp-holder is-yellow-bg">
                      is-xs-4
                    </div>
                  </mn-col>
                  <mn-col query="xs-8">
                    <div class="sp-holder is-orange-bg">
                      is-xs-8
                    </div>
                  </mn-col>
                </mn-cols>
                <mn-cols gapless>
                  <mn-col query="xs-4">
                    <div class="sp-holder sp-left-gapless is-yellow-bg">
                      is-xs-4
                    </div>
                  </mn-col>
                  <mn-col query="xs-8">
                    <div class="sp-holder sp-right-gapless is-orange-bg">
                      is-xs-8
                    </div>
                  </mn-col>
                </mn-cols>
              </mn-card-item>
            </mn-card>

          </div>
        </mn-scroller>
      </mn-row>
    </mn-rows>
  </transition>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  @import "../../../../sass/variables";

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
