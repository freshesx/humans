<template>
  <mn-icon :name="checked ? icons.checkbox : icons.checkboxBlank" :class="[ 'mn-cell-icon', { 'is-active': checked } ]"></mn-icon>
</template>

<script>
  import Element from '../../util/element'

  export default new Element({
    name: 'mn-cell-icon',
    props: {
      checked: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        icons: {
          checkboxBlank: require('vue-human-icons/js/android/checkbox-blank'),
          checkbox: require('vue-human-icons/js/android/checkbox')
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars.scss";

  .mn-cell-icon {
    color: #999;

    &.is-active {
      color: $pink;
    }
  }
</style>
