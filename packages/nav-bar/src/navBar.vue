<template>
  <div class="mn-nav-bar">
    <div class="mn-nav-bar-prefix">
      <slot name="prefix"></slot>
    </div>
    <div class="mn-nav-bar-body">
      <slot name="body"></slot>
    </div>
    <div class="mn-nav-bar-suffix">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mn-nav-bar',
    props: {
      loading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
