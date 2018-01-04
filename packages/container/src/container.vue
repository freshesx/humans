<template>
  <div class="mn-container" :class="{ 'is-fluid': fluid }">
    <!-- The container contents -->
    <slot></slot>
  </div>
</template>

<script>
  /**
   * Container component
   */
  export default {
    name: 'mn-container',
    props: {
      /**
       * Enable fluid layout
       */
      fluid: Boolean
    }
  }
</script>
