<template>
  <div :class="[`${cssPrefix}card-item-addon`, `is-${typeName}`, { 'is-muted': muted, 'is-action': action }]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-card-prefix',
    props: {
      muted: Boolean,
      action: Boolean
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    data () {
      return {
        typeName: 'prefix'
      }
    }
  }
</script>

<style lang="scss">
  @import "../../sass/vars";

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
