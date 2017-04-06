<template>
  <article class="mn-article">
    <slot></slot>
  </article>
</template>

<script>
  import Element from '../../util/Element'

  export default new Element({
    name: 'mn-article'
  })
</script>

<style lang="scss">
  @import "../../scss/mixins/headings";

  .mn-article {
    @include headings {
      margin-bottom: 1rem;
    }
  }
</style>
