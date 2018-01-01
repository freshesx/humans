<template>
  <transition name="has-slide">
    <div class="mn-page">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'mn-page'
  }
</script>
