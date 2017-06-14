<template>
  <transition :name="transition || 'has-slide-in-bottom'">
    <div class="mn-modal" v-if="visible" :style="{ zIndex }">
      <div class="mn-modal-body">
        <slot></slot>
      </div>
      <div class="mn-modal-suffix" v-if="$slots.suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  import Element from '../../utils/Element'
  import layerMixin from '../layer/layerMixin'
  import shadeMixin from '../layer/shadeMixin'

  export default new Element({
    name: 'mn-modal',
    mixins: [
      layerMixin,
      shadeMixin
    ],
    methods: {
      whenShadeCallHiding () {
        this.hide()
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/mixins/media";

  .mn-modal {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 5rem;
    right: 0.5rem;
    bottom: 0.5rem;
    left: 0.5rem;
    background: #fff;
    border-radius: 0.75rem;
    box-shadow: 0 0px 3px rgba(0, 0, 0, 0.02);
    overflow: hidden;

    @include screen('tablet') {
      width: 600px;
      top: 30%;
      right: auto;
      bottom: 2rem;
      left: 50%;
      margin-left: -300px;
    }

    // @todo 通过 JS 动态计算高度
    @include min-screen('desktop') {
      width: 600px;
      top: 10%;
      right: auto;
      bottom: 10%;
      left: 50%;
      margin-left: -300px;
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
