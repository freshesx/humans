<template>
  <div :class="[cardClass]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    computed: {
      cardClass () {
        return { [`${this.$human.cssPrefix}card`]: true }
      }
    }
  }
</script>
