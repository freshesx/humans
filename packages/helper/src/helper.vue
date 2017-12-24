<template>
  <div class="mn-helper" v-if="validate.$error">
    <!-- show helper contents -->
    <slot></slot>
  </div>
</template>

<script>
  /**
   * Helper component for form
   */
  export default {
    name: 'mn-helper',
    props: {
      /**
       * vuelidate child object, e.g. this.$v.models.age, not this.$v
       * @see https://github.com/monterail/vuelidate
       */
      validate: Object
    }
  }
</script>
