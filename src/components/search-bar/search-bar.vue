<template>
  <div :class="[ `${cssPrefix}search-bar`, { [`is-${size}`]: !!size } ]">
    <mn-icon name="ios-search-strong"></mn-icon>
    <div :class="[ `${cssPrefix}search-bar-control` ]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Icon from '../icon/icon'

  export default {
    components: {
      [Icon.name]: Icon
    },
    name: 'mn-search-bar',
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

<style lang="scss">
  @import "../../sass/vars";

  $-search-bar: #{$namespace}search-bar;

  .#{$-search-bar} {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    align-items: center;
    background: #eee;
    border-radius: $base-radius;
    padding: 0.5rem;
    transition: width 0.2s;

    &-control {
      flex: 1;
      margin-left: 0.5rem;
    }

    &.is-sm {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    }
  }
</style>
