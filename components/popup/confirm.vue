<template>
  <mn-popup :show="show" :class="[ 'mn-popup-confirm' ]">
    <mn-popup-card class="has-none-margin-bottom">
      <mn-card-item>
        <mn-card-body class="has-center-text">
          <h4>{{ title }}</h4>
          <small>{{ description }}</small>
        </mn-card-body>
      </mn-card-item>
      <mn-card-btns type="column">
        <button class="has-blue-text" @click="cancel">{{ cancelText }}</button>
        <button class="has-blue-text" @click="confirm">{{ confirmText }}</button>
      </mn-card-btns>
    </mn-popup-card>
  </mn-popup>
</template>

<script>
  import Element from '../../util/element'
  import Popup from './popup'
  import PopupCard from '../popup/popup-card'
  import CardItem from '../card/card-item'
  import CardBody from '../card/card-body'
  import CardBtns from '../card/card-btns'

  export default new Element({
    components: {
      [Popup.name]: Popup,
      [PopupCard.name]: PopupCard,
      [CardItem.name]: CardItem,
      [CardBody.name]: CardBody,
      [CardBtns.name]: CardBtns
    },
    methods: {
      cancel () {
        this.show = false
        this.$emit('cancel')
      },
      confirm () {
        this.show = false
        this.$emit('confirm')
      }
    },
    data () {
      return {
        show: false,
        title: 'Confirm',
        description: '',
        cancelText: 'Cancel',
        confirmText: 'OK'
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
