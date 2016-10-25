<template>
  <div v-if="this.$parent.flag === this._uid && this.show">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      },
      icon: {
        type: String
      },
      link: {
        type: String
      },
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
