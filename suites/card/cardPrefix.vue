<template>
  <div
    class="mn-card-item-addon"
    :class="{
      [`is-${typeName}`]: true,
      'is-muted': muted,
      'is-action': action
    }">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-card-prefix',
    props: {
      muted: Boolean,
      action: Boolean
    },
    data () {
      return {
        typeName: 'prefix'
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-card-item-addon {
    flex-shrink: 0;

    &.is-prefix {
      margin-right: 0.5rem;
    }

    &.is-suffix {
      margin-left: 0.5rem;
    }

    &.is-muted {
      color: #666;
    }

    &.is-action {
      display: flex;
      margin-top: -$grid-gutters;
      margin-bottom: -$grid-gutters;
      align-items: center;
    }
  }
</style>
