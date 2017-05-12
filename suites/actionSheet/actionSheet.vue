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
    <mn-card class="has-none-margin-bottom" v-if="cancelButton">
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
  import cardBtns from '../card/card-btns'

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
  @import "../../scss/mixins/media";

  .mn-action-sheet {
    right: 8px;
    bottom: 8px;
    left: 8px;

    @include min-screen('desktop') {
      width: 600px;
      left: 50%;
      right: auto;
      margin-left: -300px;
    }
  }
</style>
