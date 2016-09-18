<template>
  <div id="app">
    <h1>Vue Human UI</h1>

    <color-section></color-section>

  </div>
</template>

<script>
import ColorSection from './components/color-section'

export default {
  components: {
    ColorSection
  }
}
</script>

<style lang="scss">
  @import "../sass/human";
</style>
