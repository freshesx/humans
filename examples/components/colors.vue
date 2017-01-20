<template>
  <docs-layout-page>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Color</h1>
          <small>Text, background, other.</small>
        </mn-letter-body>
      </mn-letter>

      <mn-card>
        <mn-card-item><h5>Background color schema</h5></mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-cols>
              <mn-col v-for="(color, index) in colors">
                <div class="tile" :class="[ getBoxClass(color.className), { 'has-white-text': index <= 10 } ]">
                  .has-{{ color.className }}-bg
                </div>
              </mn-col>
            </mn-cols>
          </mn-card-body>
        </mn-card-item>
      </mn-card>

      <mn-card>
        <mn-card-item><h5>Text color schema</h5></mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-cols>
              <mn-col mobile="six" v-for="color in colors">
                <div class="text" :class="getTextClass(color.className)">
                  .has-{{ color.className }}-text
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
    methods: {
      getBoxClass (className) {
        return {
          [`has-${className}-bg`]: true
        }
      },
      getTextClass (className) {
        return {
          [`has-${className}-text`]: true
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
          { className: 'pink' },
          { className: 'black' },
          { className: 'black-lighter' },
          { className: 'black-lightest' },
          { className: 'gray-darkest' },
          { className: 'gray-darker' },
          { className: 'gray' },
          { className: 'gray-lighter' },
          { className: 'gray-lightest' },
          { className: 'white' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tile {
    height: 80px;
    margin: 0 auto 1rem auto;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text {
    text-align: center;
    margin-bottom: 1rem;
  }
</style>
