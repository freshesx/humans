<template>
  <div class="mn-helper-item" :class="{ 'is-error': true }" v-if="someIsInvalid">
    <mn-icon :name="iosInformation"></mn-icon>
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../util/Element'
  import Icon from '../icon/icon'
  import iosInformation from 'vue-human-icons/js/ios/information'

  export default new Element({
    components: {
      [Icon.name]: Icon
    },
    name: 'mn-helper-item',
    props: {
      name: String
    },
    data () {
      return {
        iosInformation
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
  @import "../../scss/vars";

  .mn-helper-item {
    &.is-error {
      color: $pink;
    }
  }
</style>
