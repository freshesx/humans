<template>
  <div class="mn-cell-icon-wrapper">
    <mn-icon
      class="mn-cell-icon"
      :name="checked ? icons.checkmark : icons.circleOutline"
      :class="{ 'is-active': checked }"
      :scale="1.4"></mn-icon>
    <div class="mn-cell-icon-mask" :class="{ 'is-active': isActiveMask }"></div>
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import iconElement from '../icon/icon'

  export default new Element({
    name: 'mn-cell-icon',
    components: {
      ...iconElement.insert()
    },
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
  @import "./vars";

  .mn-cell-icon-wrapper {
    position: relative;
  }

  .mn-cell-icon {
    z-index: 2;
    color: $mn-cell-icon-color;

    &.is-active {
      color: $mn-cell-icon-active-color;
    }
  }

  .mn-cell-icon-mask {
    $-width: 120px;
    $-height: 120px;
    position: absolute;
    z-index: 1;
    width: $-width;
    height: $-height;
    top: 50%;
    left: 50%;
    margin-top: $-height * -0.5;
    margin-left: $-width * -0.5;
    border-radius: $-width / 2;
    transition-duration: 366ms;
    transition-timing-function: ease-in-out;
    transform: scale(0);

    &.is-active {
      background: rgba($mn-cell-icon-mask-active-bg, 0.3);
      transform: scale(1);
    }
  }
</style>
