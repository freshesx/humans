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

  console.log(card)

  export default {
    name: 'mn-alert',
    components: Object.assign({}, card),
    mixins: [
      layerMixin,
      shadeMixin
    ],
    props: {
      title: {
        type: String,
        default: '警告'
      },
      description: String,
      cancelText: {
        type: String,
        default: '关闭'
      }
    },
    methods: {
      cancel () {
        this.hide()
        this.$emit('cancel')
      },
      /**
       * 覆盖 shadeMixin 内的方法
       * @method whenShadeCallHiding
       * @return {undefined}
       */
      whenShadeCallHiding () {
        this.cancel()
      }
    }
  }
</script>
