<template>
  <div :class="[ `${cssPrefix}card-group-note` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-card-note',
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
