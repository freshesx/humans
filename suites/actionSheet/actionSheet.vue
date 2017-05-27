<template>
  <mn-popup class="mn-action-sheet"
    animation="slideInBottom"
    :show="show"
    @close="onClosePopup">
    <!-- Main contents -->
    <div :style="hasCancelButtonStyle">
      <slot></slot>
    </div>
    <!-- Cancel button -->
    <mn-card class="has-none-margin-bottom" v-if="cancelButton" rounded>
      <mn-card-btns>
        <button class="has-blue-text" @click="onClosePopup">
          <strong>{{ $t('mn.popup.cancelText') }}</strong>
        </button>
      </mn-card-btns>
    </mn-card>
  </mn-popup>
</template>

<script>
  import Element from '../../utils/Element'
  import popup from '../popup/popup'
  import card from '../card/card'
  import cardBtns from '../card/cardBtns'

  export default new Element({
    name: 'mn-action-sheet',
    components: {
      ...popup.inject(),
      ...card.inject(),
      ...cardBtns.inject()
    },
    props: {
      show: Boolean,
      cancelButton: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      hasCancelButtonStyle () {
        return {
          'margin-bottom': this.cancelButton ? '-0.5rem' : '-1rem'
        }
      }
    },
    methods: {
      onClosePopup () {
        this.$emit('update:show', false)
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";
  @import "../../scss/mixins/media";

  .mn-action-sheet {
    right: $grid-gutters / 2;
    bottom: $grid-gutters / 2;
    left: $grid-gutters / 2;

    @include min-screen('desktop') {
      width: $mnActionSheetDesktopWidth;
      left: 50%;
      right: auto;
      margin-left: $mnActionSheetDesktopWidth * -0.5;
    }
  }
</style>
