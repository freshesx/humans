<template>
  <div :class="[ `${cssPrefix}tab-content` ]" v-if="this.$parent.flag === this._uid && this.show">
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
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>

<style lang="scss">
  @import "../../sass/vars";
  @import "./vars";

  .#{$-tab-content} {
    padding: 0 1rem;
  }
</style>
