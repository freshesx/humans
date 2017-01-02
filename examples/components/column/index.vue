<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <mn-section>
            <mn-letter>
              <h1>Columns</h1>
              <small>cols, col</small>
            </mn-letter>

            <mn-card>
              <mn-card-item>Flex column</mn-card-item>
              <mn-card-item>
                <mn-card-body>
                  <mn-cols>
                    <mn-col mobile="three" v-for="i in [1, 2, 3, 4]">
                      <div class="holder has-purple-bg"></div>
                    </mn-col>
                    <mn-col mobile="four" v-for="i in [1, 2, 3]">
                      <div class="holder has-purple-bg"></div>
                    </mn-col>
                    <mn-col mobile="twelve">
                      <div class="holder has-purple-bg"></div>
                    </mn-col>
                  </mn-cols>
                </mn-card-body>
              </mn-card-item>
            </mn-card>

            <mn-card>
              <mn-card-item>Gapless</mn-card-item>
              <mn-card-item>
                <mn-card-body>
                  <mn-cols>
                    <mn-col mobile="four" desktop="two">
                      <div class="holder has-yellow-bg">
                        four mobile, two desktop
                      </div>
                    </mn-col>
                    <mn-col mobile="eight" desktop="ten">
                      <div class="holder has-orange-bg">
                        eight mobile, ten desktop
                      </div>
                    </mn-col>
                  </mn-cols>
                  <mn-cols gapless>
                    <mn-col mobile="four">
                      <div class="holder left-gapless has-yellow-bg">
                        Hello
                      </div>
                    </mn-col>
                    <mn-col mobile="eight">
                      <div class="holder right-gapless has-orange-bg">
                        World!
                      </div>
                    </mn-col>
                  </mn-cols>
                </mn-card-body>
              </mn-card-item>
            </mn-card>
          </mn-section>
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
  @import "../../../src/sass/variables";

  .holder {
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    color: #fff;
    border-radius: 0.75rem;
    margin-bottom: 0.5rem;
  }

  .left-gapless,
  .right-gapless {
    border-radius: 0;
  }

  .left-gapless {
    border-top-left-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;
  }

  .right-gapless {
    border-top-right-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
  }
</style>
