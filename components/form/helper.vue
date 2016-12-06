<template>
  <div :class="[ `${cssPrefix}form-helper`, { 'is-error': isInvalid } ]">
    <span v-for="information in validate">
      <mn-icon name="ios-information" :scale="0.8"></mn-icon> {{ information.message }}
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      validate: Array
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      isInvalid () {
        return this.validate && this.validate.length > 0
      }
    }
  }
</script>
