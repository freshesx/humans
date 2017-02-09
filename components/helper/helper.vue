<template>
  <div class="mn-helper" v-if="validate.$error">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-helper',
    props: {
      validate: Object
    }
  }
</script>
