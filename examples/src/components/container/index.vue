<template>
  <page>
    <mn-letter>
      <mn-letter-body>
        <h1>Container</h1>
      </mn-letter-body>
    </mn-letter>

    <mn-section>
      <div class="example-tile">
        <h1>Container</h1>
        <small v-for="(name, key) in nameOfScreens">
          {{ name }}
          <span v-if="key !== nameOfScreens.length - 1"> / </span>
        </small>
      </div>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <mn-card-body>
            View mobile and desktop
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>
  </page>
</template>

<script>
  import core from 'vue-human/suites/core'
  import page from '../base/page'
  import Human from 'vue-human'

  export default {
    components: {
      ...core.map(),
      page
    },
    data () {
      return {
        screens: Human.$screens
      }
    },
    computed: {
      nameOfScreens () {
        return this.screens.map(item => item.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .example-tile {
    background: #ddd;
    text-align: center;
    padding: 1rem 0;
  }
</style>
