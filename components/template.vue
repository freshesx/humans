<!-- This is just a component template, copy it to create new component -->

<template>
  <div :class="[cssPrefix + 'className']">
    <slot></slot>
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
