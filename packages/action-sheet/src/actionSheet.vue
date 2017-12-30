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
            <strong>{{ cancelText }}</strong>
          </button>
        </mn-card-btns>
      </mn-card>
    </div>
  </transition>
</template>

<script>
  import card from '@humans/card'
  import { layerMixin } from '@humans/layer'
  import { shadeMixin } from '@humans/shade'

  export default {
    name: 'mn-action-sheet',
    components: Object.assign({}, card),
    mixins: [
      layerMixin,
      shadeMixin
    ],
    props: {
      cancelButton: {
        type: Boolean,
        default: true
      },
      cancelText: {
        type: String,
        default: '取消'
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
  }
</script>
