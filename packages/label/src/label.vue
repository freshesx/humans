<template>
  <label
    class="mn-label"
    :class="{ 'is-error': error }">
    <!-- show label contents -->
    <slot></slot>
  </label>
</template>

<script>
  /**
   * Label component for form
   */
  export default {
    name: 'mn-label',
    props: {
      /**
       * vuelidate child object, e.g. this.$v.models.age, not this.$v
       * @see https://github.com/monterail/vuelidate
       */
      validate: Object
    },
    computed: {
      error () {
        return this.validate ? this.validate.$error : false
      }
    }
  }
</script>
