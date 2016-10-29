<template>
  <div :class="[cssPrefix + 'letter']">
    <div class="letter-body" v-if="$slots.body || $slots.default">
      <slot name="body"></slot>
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
