<template>
  <div class="mn-search-bar" :class="{ [`is-${size}`]: !!size }">
    <mn-icon :name="searchStrong"></mn-icon>
    <div class="mn-search-bar-control">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import Icon from '../icon/icon'
  import searchStrong from 'vue-human-icons/js/ios/search-strong'

  export default new Element({
    components: {
      [Icon.name]: Icon
    },
    name: 'mn-search-bar',
    props: {
      size: String
    },
    data () {
      return {
        searchStrong
      }
    }
  })
</script>

<style lang="scss">
  @import "./vars";

  .mn-search-bar {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    align-items: center;
    background: $mn-search-bar-bg;
    color: $mn-search-bar-color;
    border-radius: $mn-search-bar-mobile-radius;
    padding: $mn-search-bar-grid-gutters / 2;
    transition: width 0.2s;

    &-control {
      flex: 1;
      margin-left: $mn-search-bar-grid-gutters / 2;
    }

    &.is-sm {
      padding-top: $mn-search-bar-grid-gutters / 4;
      padding-bottom: $mn-search-bar-grid-gutters / 4;
    }
  }
</style>
