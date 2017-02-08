<template>
  <div class="mn-tab-bar-content" v-if="this.$parent.flag === this._uid && this.show">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-tab-bar-pane',
    props: {
      title: {
        type: String
      },
      icon: {
        type: [String, Object]
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

<style lang="scss">
  .mn-tab-bar-content {
    padding: 0 1rem;
  }
</style>
