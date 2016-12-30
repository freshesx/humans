<template>
  <div :class="[`${cssPrefix}card-btns`, typeClass]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-card-btns',
    props: {
      type: {
        type: String,
        validator: val => ['column'].includes(val)
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
