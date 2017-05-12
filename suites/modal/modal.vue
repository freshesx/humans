<template>
  <mn-popup class="mn-modal"
    animation="slideInBottom"
    :show="show"
    @close="onClosePopup">
    <div class="mn-modal-body">
      <slot></slot>
    </div>
    <div class="mn-modal-suffix" v-if="$slots.suffix">
      <slot name="suffix"></slot>
    </div>
  </mn-popup>
</template>

<script>
  import Element from '../../util/Element'
  import popup from '../popup/popup'

  export default new Element({
    name: 'mn-modal',
    components: {
      ...popup.inject()
    },
    props: {
      /**
       * Show or hide popup and mask
       */
      show: Boolean
    },
    methods: {
      /**
       * Trigger close method
       * @method onClosePopup
       *
       * @return {void}
       */
      onClosePopup () {
        this.$emit('update:show', false)
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/mixins/media";

  .mn-modal {
    display: flex;
    flex-direction: column;
    top: 5rem;
    bottom: 0;
    width: 100%;
    background: #fff;
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
    box-shadow: 0 0px 3px rgba(0, 0, 0, 0.02);
    overflow: hidden;

    @include min-screen('desktop') {
      width: 600px;
      left: 50%;
      right: auto;
      margin-left: -300px;
      top: 10%;
      bottom: 10%;
      border-radius: 0.75rem;
      box-shadow: 0 2px 100px rgba(0, 0, 0, 0.1);
    }
  }

  .mn-modal-body {
    flex: 1;
    position: relative;
  }

  .mn-modal-suffix {
    flex-shrink: 1;
    min-height: 2.75rem;
  }
</style>
