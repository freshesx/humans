<template>
  <div :class="[`${cssPrefix}card-item`, typeClass]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        validator: val => ['link', 'arrow'].includes(val)
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      typeClass () {
        return { [`is-${this.type}`]: !!this.type }
      }
    }
  }
</script>
