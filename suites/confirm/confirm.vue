<template>
  <transition :name="transition || 'has-fade-in'">
    <div class="mn-confirm" v-if="visible" :style="{ zIndex }">
      <mn-card class="has-none-margin-bottom" rounded>
        <mn-card-item>
          <mn-card-body class="has-center-text">
            <h4>{{ title }}</h4>
            <small v-if="description">{{ description }}</small>
          </mn-card-body>
        </mn-card-item>
        <mn-card-btns type="column">
          <button class="has-blue-text" @click="cancel">{{ cancelText }}</button>
          <button class="has-blue-text" @click="confirm">{{ confirmText }}</button>
        </mn-card-btns>
      </mn-card>
    </div>
  </transition>
</template>

<script>
  import Element from '../../utils/Element'
  import card from '../card/card'
  import cardItem from '../card/cardItem'
  import cardBody from '../card/cardBody'
  import cardBtns from '../card/cardBtns'
  import layerMixin from '../layer/layerMixin'
  import shadeMixin from '../layer/shadeMixin'

  export default new Element({
    name: 'mn-confirm',
    mixins: [
      layerMixin,
      shadeMixin
    ],
    components: {
      ...card.insert(),
      ...cardItem.insert(),
      ...cardBody.insert(),
      ...cardBtns.insert()
    },
    props: {
      title: {
        type: String,
        default () { return this.$t('mn.popup.confirmTitle') }
      },
      description: String,
      cancelText: {
        type: String,
        default () { return this.$t('mn.popup.cancelText') }
      },
      confirmText: {
        type: String,
        default () { return this.$t('mn.popup.confirmText') }
      }
    },
    methods: {
      cancel () {
        this.hide()
        this.$emit('cancel')
      },
      confirm () {
        this.hide()
        this.$emit('confirm')
      },
      whenShadeCallHiding () {
        this.cancel()
      }
    }
  })
</script>

<style lang="scss">
  @import "./vars";

  .mn-confirm {
    position: fixed;
    width: $mn-confirm-width;
    top: 45%;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
