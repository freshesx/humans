<template>
  <label :class="[ `${cssPrefix}form-label` ]  ">
    <slot></slot>
  </label>
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
