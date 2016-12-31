<template>
  <div :class="[ `${cssPrefix}form-helper`, 'is-error' ]" v-if="someIsInvalid">
    <mn-icon name="ios-information"></mn-icon>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      name: String
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
