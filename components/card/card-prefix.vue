<template>
  <div :class="[`${cssPrefix}card-item-addon`, `is-${typeName}`, { 'is-muted': muted, 'is-action': action }]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-card-prefix',
    props: {
      muted: Boolean,
      action: Boolean
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    data () {
      return {
        typeName: 'prefix'
      }
    }
  }
</script>
