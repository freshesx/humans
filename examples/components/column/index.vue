<template>
  <docs-layout-page>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Columns</h1>
          <small>cols, col</small>
        </mn-letter-body>
      </mn-letter>

      <mn-card>
        <mn-card-item>Order</mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-cols>
              <mn-col mobile="six, 2">
                <div class="holder has-purple-bg"></div>
              </mn-col>
              <mn-col :mobile="{ span: 'two', order: 6 }">
                <div class="holder has-pink-bg"></div>
              </mn-col>
              <mn-col mobile="four, -1">
                <div class="holder has-blue-bg"></div>
              </mn-col>
            </mn-cols>
          </mn-card-body>
        </mn-card-item>
      </mn-card>

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
  </docs-layout-page>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  @import "~vue-human/scss/vars.scss";

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
