<template>
  <mn-popup :show="isShow" :class="[ 'mn-popup-confirm' ]">
    <mn-card class="has-none-margin-bottom">
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
  </mn-popup>
</template>

<script>
  import Element from '../../utils/Element'
  import popup from '../popup/popup'
  import card from '../card/card'
  import cardItem from '../card/card-item'
  import cardBody from '../card/cardBody'
  import cardBtns from '../card/card-btns'
  import popupManager from '../popup/popupManager'

  export default new Element({
    components: {
      ...popup.inject(),
      ...card.inject(),
      ...cardItem.inject(),
      ...cardBody.inject(),
      ...cardBtns.inject()
    },
    mixins: [
      /**
       * Add isShow, close(), show() mixins
       */
      popupManager
    ],
    methods: {
      cancel () {
        this.close()
        this.$emit('cancel')
      },
      confirm () {
        this.close()
        this.$emit('confirm')
      }
    },
    data () {
      return {
        title: this.$t('mn.popup.confirmTitle'),
        description: undefined,
        cancelText: this.$t('mn.popup.cancelText'),
        confirmText: this.$t('mn.popup.confirmText')
      }
    }
  })
</script>

<style lang="scss">
  .mn-popup-confirm {
    width: 280px;
    top: 45%;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
