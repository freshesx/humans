<template>
  <div :class="[ `${cssPrefix}nav-bar` ]">
    <div :class="[`${cssPrefix}nav-bar-prefix`]">
      <slot name="prefix"></slot>
    </div>
    <div :class="[`${cssPrefix}nav-bar-body`]">
      <slot name="body"></slot>
    </div>
    <div :class="[`${cssPrefix}nav-bar-suffix`]">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      loading: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
