<template>
  <div :class="[ `${cssPrefix}search-bar` ]">
    <mn-icon name="ios-search-strong"></mn-icon>
    <div :class="[ `${cssPrefix}search-bar-control` ]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
