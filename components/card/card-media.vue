<template>
  <div class="mn-card-media">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-card-media'
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
