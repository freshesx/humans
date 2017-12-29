<template>
  <transition :name="transition || 'has-fade-in'">
    <div class="mn-alert" v-if="visible" :style="{ zIndex }">
      <mn-card class="has-none-margin-bottom" rounded>
        <mn-card-item>
          <mn-card-body class="has-center-text">
            <h4>{{ title }}</h4>
            <small v-if="description">{{ description }}</small>
          </mn-card-body>
        </mn-card-item>
        <mn-card-btns type="column">
          <button class="has-blue-text" @click="cancel">{{ cancelText }}</button>
        </mn-card-btns>
      </mn-card>
    </div>
  </transition>
</template>

<script>
  import card from '@humans/card'
  import { layerMixin } from '@humans/layer'
  import { shadeMixin } from '@humans/shade'

  /**
   * Alert component
   */
  export default {
    name: 'mn-alert',
    components: Object.assign({}, card),
    mixins: [
      layerMixin,
      shadeMixin
    ],
    props: {
      /**
       * Title
       */
      title: {
        type: String,
        default: '警告'
      },
      /**
       * Description
       */
      description: String,
      /**
       * Cancel text
       */
      cancelText: {
        type: String,
        default: '关闭'
      }
    },
    methods: {
      cancel () {
        this.hide()

        /**
         * @event cancel
         */
        this.$emit('cancel')
      },
      // Close self when shade call hide
      whenShadeCallHiding () {
        this.cancel()
      }
    }
  }
</script>
