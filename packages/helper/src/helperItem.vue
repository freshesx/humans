<template>
  <div class="mn-helper-item" :class="{ 'is-error': true }" v-if="someIsInvalid">
    <mn-icon :name="informationIcon" :scale="0.875"></mn-icon>
    <slot></slot>
  </div>
</template>

<script>
  import { icon } from '@humans/icon'
  import informationIcon from 'vue-human-icons/js/ios/information'

  export default {
    name: 'mn-helper-item',
    components: Object.assign({}, icon),
    props: {
      name: String
    },
    data () {
      return {
        informationIcon
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
  }
</script>
