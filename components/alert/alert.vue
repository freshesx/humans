<template>
  <mn-popup :show="isShow" :class="[ 'mn-popup-alert' ]">
    <mn-popup-card class="has-none-margin-bottom">
      <mn-card-item>
        <mn-card-body class="has-center-text">
          <h4>{{ title }}</h4>
          <small v-if="description">{{ description }}</small>
        </mn-card-body>
      </mn-card-item>
      <mn-card-btns type="column">
        <button class="has-blue-text" @click="cancel">{{ cancelText }}</button>
      </mn-card-btns>
    </mn-popup-card>
  </mn-popup>
</template>

<script>
  import Element from '../../util/Element'
  import popup from '../popup/popup'
  import popupCard from '../popup/popup-card'
  import cardItem from '../card/card-item'
  import cardBody from '../card/card-body'
  import cardBtns from '../card/card-btns'

  export default new Element({
    components: {
      [popup.name]: popup,
      [popupCard.name]: popupCard,
      [cardItem.name]: cardItem,
      [cardBody.name]: cardBody,
      [cardBtns.name]: cardBtns
    },
    methods: {
      cancel () {
        this.isShow = false
        this.$emit('cancel')
      },
      show () {
        this.isShow = true
        return this
      }
    },
    data () {
      return {
        isShow: false,
        title: this.$t('mn.popup.alertTitle'),
        description: undefined,
        cancelText: this.$t('mn.popup.closeText')
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
