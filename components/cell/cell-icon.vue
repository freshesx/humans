<template>
  <div class="mn-cell-icon-wrapper">
    <mn-icon
      :name="checked ? icons.checkmark : icons.circleOutline"
      :class="[ 'mn-cell-icon', { 'is-active': checked } ]"
      :scale="1.4"></mn-icon>
    <div class="mn-cell-icon-mask" :class="{ 'is-active': isActiveMask }"></div>
  </div>
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
        },
        isActiveMask: false
      }
    },
    watch: {
      checked () {
        this.isActiveMask = true
        setTimeout(() => {
          this.isActiveMask = false
        }, 366)
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars.scss";

  $-cell-icon-active-color: $pink;

  .mn-cell-icon {
    z-index: 2;
    color: #999;
    vertical-align: -8px;

    &.is-active {
      color: $-cell-icon-active-color;
    }
  }

  .mn-cell-icon-wrapper {
    position: relative;
  }

  .mn-cell-icon-mask {
    $width: 120px;
    $height: 120px;
    position: absolute;
    z-index: 1;
    width: $width;
    height: $height;
    top: 50%;
    left: 50%;
    margin-top: $height * -0.5;
    margin-left: $width * -0.5;
    border-radius: $width / 2;
    transition-duration: 366ms;
    transition-timing-function: ease-in-out;
    transform: scale(0);

    &.is-active {
      background: rgba($-cell-icon-active-color, 0.3);
      transform: scale(1);
    }
  }
</style>
