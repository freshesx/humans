<template>
  <transition :name="transition || 'has-slide-in-bottom'">
    <div class="mn-action-sheet" v-if="visible" :style="{ zIndex }">
      <!-- Main contents -->
      <div :style="hasCancelButtonStyle">
        <slot></slot>
      </div>
      <!-- Cancel button -->
      <mn-card class="has-none-margin-bottom" v-if="cancelButton" rounded>
        <mn-card-btns>
          <button class="has-blue-text" @click="hide">
            <strong>{{ $t('mn.popup.cancelText') }}</strong>
          </button>
        </mn-card-btns>
      </mn-card>
    </div>
  </transition>
</template>

<script>
  import Element from '../../utils/Element'
  import card from '../card/card'
  import cardBtns from '../card/cardBtns'
  import layerMixin from '../layer/layerMixin'
  import shadeMixin from '../layer/shadeMixin'

  export default new Element({
    name: 'mn-action-sheet',
    components: {
      ...card.insert(),
      ...cardBtns.insert()
    },
    mixins: [
      layerMixin,
      shadeMixin
    ],
    props: {
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
      whenShadeCallHiding () {
        this.hide()
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/mixins/media";
  @import "./vars";

  .mn-action-sheet {
    position: fixed;
    right: $mn-action-sheet-grid-gutter / 2;
    bottom: $mn-action-sheet-grid-gutter / 2;
    left: $mn-action-sheet-grid-gutter / 2;

    @include min-screen('desktop') {
      width: $mn-action-sheet-desktop-width;
      width: $mn-action-sheet-desktop-width;
      left: 50%;
      right: auto;
      margin-left: $mn-action-sheet-desktop-width * -0.5;
    }
  }
</style>
