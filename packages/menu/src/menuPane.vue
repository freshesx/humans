<template>
  <div class="mn-menu-pane">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-menu-pane',
    data () {
      return {
        isSelected: false
      }
    }
  }
</script>
