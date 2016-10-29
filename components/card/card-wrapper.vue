<template>
  <div :class="[cssPrefix]">
    <div :class="[cssPrefix + '-note']" v-if="$slots.header">
      <slot name="header"></slot>
    </div>

    <slot name="body"></slot>

    <div :class="[cssPrefix + '-note']" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      cssPrefix () {
        return `${this.$human.cssPrefix}card-group`
      }
    }
  }
</script>
