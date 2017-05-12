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
  @import "../../scss/vars";

  .mn-search-bar {
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
