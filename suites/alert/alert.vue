<template>
  <mn-popup class="mn-popup-alert" :show="isShow">
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
  </mn-popup>
</template>

<script>
  import Element from '../../utils/Element'
  import popup from '../popup/popup'
  import card from '../card/card'
  import cardItem from '../card/cardItem'
  import cardBody from '../card/cardBody'
  import cardBtns from '../card/cardBtns'
  import popupMixin from '../popup/popupMixin'

  export default new Element({
    components: {
      ...popup.inject(),
      ...card.inject(),
      ...cardItem.inject(),
      ...cardBody.inject(),
      ...cardBtns.inject()
    },
    mixins: [
      popupMixin
    ],
    props: {
      title: {
        type: String,
        default () { return this.$t('mn.popup.alertTitle') }
      },
      description: String,
      cancelText: {
        type: String,
        default () { return this.$t('mn.popup.closeText') }
      }
    },
    methods: {
      cancel () {
        this.close()
        this.$emit('cancel')
      }
    }
  })
</script>

<style lang="scss">
  .mn-popup-alert {
    width: 280px;
    top: 45%;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
