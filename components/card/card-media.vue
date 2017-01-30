<template>
  <div :class="[ `${cssPrefix}card-media` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-card-media',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>

<style lang="scss">
  .mn-card-media {
    > img {
      display: block;
      width: 100%;
    }
  }
</style>
