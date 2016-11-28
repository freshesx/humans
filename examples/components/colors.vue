<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row fixed>
        <mn-nav-bar>
          <div slot="prefix" @click="$router.go(-1)">
            <mn-icon name="ios-arrow-back"></mn-icon>Back
          </div>
          <div slot="body">
            <mn-icon name="ios-color-filter"></mn-icon>
            Color
          </div>
        </mn-nav-bar>
      </mn-row>
      <mn-row>
        <mn-scroller>
          <mn-section>
            <mn-letter>
              <h1>Color</h1>
              <small>Text, background, other.</small>
            </mn-letter>

            <mn-card>
              <mn-card-item>Color schema</mn-card-item>
              <mn-card-item>
                <mn-cols>
                  <mn-col query="xs-4" v-for="color in colors">
                    <div class="sp-tile" :class="getBoxClass(color.className)"></div>
                  </mn-col>
                </mn-cols>
              </mn-card-item>
            </mn-card>

            <mn-card>
              <mn-card-item>Color schema</mn-card-item>
              <mn-card-item>
                <mn-cols>
                  <mn-col query="xs-4" v-for="color in colors">
                    <div class="sp-text" :class="getTextClass(color.className)">
                      {{ color.className }}
                    </div>
                  </mn-col>
                </mn-cols>
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
    methods: {
      getBoxClass (className) {
        return {
          [`is-${className}-bg`]: true
        }
      },
      getTextClass (className) {
        return {
          [`is-${className}-text`]: true
        }
      }
    },
    data () {
      return {
        colors: [
          { className: 'red' },
          { className: 'orange' },
          { className: 'yellow' },
          { className: 'green' },
          { className: 'teal-blue' },
          { className: 'blue' },
          { className: 'purple' },
          { className: 'pink' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sp-tile {
    height: 80px;
    margin: 0 auto 1rem auto;
    border-radius: 12px;
  }

  .sp-text {
    text-align: center;
    margin-bottom: 1rem;
  }
</style>
