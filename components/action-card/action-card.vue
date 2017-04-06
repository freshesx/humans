<template>
  <mn-popup class="mn-action-card"
    animation="slideInBottom"
    :show="value"
    @close="onClosePopup">
    <mn-popup-card :class="[
      cancelButton
      ? 'has-one-margin-bottom'
      : 'has-none-margin-bottom'
    ]">
      <slot></slot>
    </mn-popup-card>
    <mn-popup-card class="has-none-margin-bottom" v-if="cancelButton">
      <mn-card-btns>
        <button class="has-blue-text" @click="onClosePopup">
          <strong>{{ $t('mn.popup.cancelText') }}</strong>
        </button>
      </mn-card-btns>
    </mn-popup-card>
  </mn-popup>
</template>

<script>
  import Element from '../../util/Element'
  import popup from '../popup/popup'
  import popupCard from '../popup/popup-card'
  import cardItem from '../card/card-item'
  import cardBody from '../card/card-body'
  import cardBtns from '../card/card-btns'

  export default new Element({
    name: 'mn-action-card',
    components: {
      [popup.name]: popup,
      [popupCard.name]: popupCard,
      [cardItem.name]: cardItem,
      [cardBody.name]: cardBody,
      [cardBtns.name]: cardBtns
    },
    props: {
      value: Boolean,
      cancelButton: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClosePopup () {
        this.$emit('input', false)
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/mixins/media";

  .mn-action-card {
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
