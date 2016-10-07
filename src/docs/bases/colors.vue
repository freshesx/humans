<template>
  <div class="section">
    <div class="letter">
      <div class="letter-body">
        <h1>Color</h1>
        <small>Text, background, other.</small>
      </div>
    </div>

    <div class="card">
      <div class="card-header">Color schema</div>
      <div class="card-block">
        <div class="cols">
          <div class="col is-xs-4" v-for="color in colors">
            <div class="sp-tile" :class="getBoxClass(color.className)"></div>
          </div>
        </div>
      </div>
      <div class="card-block">
        <pre>.is-{color}-bg</pre>
      </div>
    </div>

    <div class="card">
      <div class="card-header">Color schema</div>
      <div class="card-block">
        <div class="cols">
          <div class="col is-xs-4" v-for="color in colors">
            <div class="sp-text" :class="getTextClass(color.className)">
              {{ color.className }}
            </div>
          </div>
        </div>
      </div>
      <div class="card-block">
        <pre>.is-{color}-text</pre>
      </div>
    </div>

  </div>
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
