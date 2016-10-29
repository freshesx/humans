<template>
  <div :class="[cssPrefix, typeClass]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        validator: val => ['column'].includes(val)
      }
    },
    computed: {
      cssPrefix () {
        return `${this.$human.cssPrefix}card-btns`
      },
      typeClass () {
        return { [`is-${this.type}`]: !!this.type }
      }
    }
  }
</script>
