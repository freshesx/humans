<template>
  <mn-icon :name="checked ? icons.checkmark : icons.circleOutline" :class="[ 'mn-cell-icon', { 'is-active': checked } ]" :scale="1.4"></mn-icon>
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
          circleOutline: require('vue-human-icons/js/ios/circle-outline'),
          checkmark: require('vue-human-icons/js/ios/checkmark')
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars.scss";

  .mn-cell-icon {
    color: #999;
    vertical-align: -8px;

    &.is-active {
      color: $pink;
    }
  }
</style>
