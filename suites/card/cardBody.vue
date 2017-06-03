<template>
  <div
    class="mn-card-body"
    :class="{
      [`is-${columnName}`]: !!columnName,
      'is-muted': muted,
      'is-action': action
    }">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-card-body',
    props: {
      muted: Boolean,
      action: Boolean
    },
    data () {
      return {
        columnName: undefined
      }
    }
  })
</script>

<style lang="scss">
  @import "./vars";

  .mn-card-body {
    flex: 1;

    &.is-prefix,
    &.is-suffix {
      flex: auto 0;
    }

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
      margin-top: -$mn-card-grid-gutters;
      margin-bottom: -$mn-card-grid-gutters;
      align-items: center;
    }
  }
</style>
