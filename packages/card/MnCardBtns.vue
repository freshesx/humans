<template>
  <div class="mn-card-btns" :class="{ [`is-${type}`]: !!type }">
    <!-- card btns contents, add mn-btn into this -->
    <slot></slot>
  </div>
</template>

<script>
/**
 * Card btns component
 */
export default {
  name: 'MnCardBtns',
  props: {
    /**
     * Type, now only support 'column' type
     */
    type: {
      type: String,
      validator: val => ['column'].includes(val)
    }
  }
}
</script>
