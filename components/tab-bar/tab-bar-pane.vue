<template>
  <div class="mn-tab-bar-content" v-if="this.$parent.flag === this._uid && this.show">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/element'

  export default new Element({
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
  })
</script>

<style lang="scss">
  .mn-tab-bar-content {
    padding: 0 1rem;
  }
</style>
