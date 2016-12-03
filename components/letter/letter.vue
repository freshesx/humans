<template>
  <div :class="[ `${cssPrefix}letter` ]">
    <div :class="[ `${cssPrefix}letter-body` ]" v-if="$slots.body || $slots.default">
      <slot name="body"></slot>
      <slot></slot>
    </div>
    <div :class="[ `${cssPrefix}letter-action` ]" v-if="$slots.action">
      <slot name="action"></slot>
    </div>
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
