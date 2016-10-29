<template>
  <div :class="[cssPrefix + 'letter']">
    <div class="letter-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      cssPrefix () {
        return `${this.$human.cssPrefix}`
      }
    }
  }
</script>
