<template>
  <div class="mn-card-btns" :class="{ [`is-${type}`]: !!type }">
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
    }
  }
</script>
