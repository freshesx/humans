<template>
  <div class="popup-mask" v-if="show">
    <div class="popup">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
