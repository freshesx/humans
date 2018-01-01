<template>
  <div class="mn-search-bar" :class="{ [`is-${size}`]: !!size }">
    <mn-icon :name="searchIcon"></mn-icon>
    <div class="mn-search-bar-control">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import icon from '@humans/icon'
  import searchIcon from 'vue-human-icons/js/ios/search-strong'

  export default {
    components: Object.assign({}, icon),
    name: 'mn-search-bar',
    props: {
      size: String
    },
    data () {
      return {
        searchIcon
      }
    }
  }
</script>
