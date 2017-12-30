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
  import { layerMixin } from '@humans/layer'
  import { shadeMixin } from '@humans/shade'

  export default {
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
  }
</script>
