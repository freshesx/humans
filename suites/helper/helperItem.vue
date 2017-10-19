<template>
  <div class="mn-helper-item" :class="{ 'is-error': true }" v-if="someIsInvalid">
    <mn-icon :name="icons.information" :scale="0.875"></mn-icon>
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import iconElement from '../icon/icon'

  export default new Element({
    components: {
      ...iconElement.insert()
    },
    name: 'mn-helper-item',
    props: {
      name: String
    },
    data () {
      return {
        icons: {
          information: require('vue-human-icons/js/ios/information')
        }
      }
    },
    computed: {
      validate () {
        return this.$parent.validate
      },
      someIsInvalid () {
        return !this.validate[this.name]
      }
    }
  })
</script>


<style lang="scss">
  @import "./vars";

  .mn-helper-item {
    &.is-error {
      color: $mn-helper-error-color;
    }
  }
</style>
