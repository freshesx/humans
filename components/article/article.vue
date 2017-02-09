<template>
  <article class="mn-article">
    <slot></slot>
  </article>
</template>

<script>
  export default {
    name: 'mn-article'
  }
</script>

<style lang="scss">
  @import "../../scss/mixins/headings";

  .mn-article {
    @include headings {
      margin-bottom: 1rem;
    }
  }
</style>
