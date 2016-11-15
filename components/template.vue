<!-- This is just a component template, copy it to create new component -->

<template>
  <!-- class and style use Array, not Object -->
  <div :class="[ `${cssPrefix}className` ]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
