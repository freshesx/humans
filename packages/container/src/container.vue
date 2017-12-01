<template>
  <div class="mn-container" :class="{ 'is-fluid': fluid }">
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
