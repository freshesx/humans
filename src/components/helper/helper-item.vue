<template>
  <div :class="[ `${cssPrefix}form-helper`, 'is-error' ]" v-if="someIsInvalid">
    <mn-icon :name="iosInformation"></mn-icon>
    <slot></slot>
  </div>
</template>

<script>
  import Icon from '../icon/icon'
  import iosInformation from 'vue-human-icons/js/ios/information'

  export default {
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
      cssPrefix () {
        return this.$human.cssPrefix
      },
      validate () {
        return this.$parent.validate
      },
      someIsInvalid () {
        return !this.validate[this.name]
      }
    }
  }
</script>
