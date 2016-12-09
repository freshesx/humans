<template>
  <div :class="[ `${cssPrefix}search-bar`, { [`is-${size}`]: !!size } ]">
    <mn-icon name="ios-search-strong"></mn-icon>
    <div :class="[ `${cssPrefix}search-bar-control` ]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      size: String
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
