<template>
  <mn-popup :show="show" :classes="[`${cssPrefix}popup-dialog`]">
    <mn-card class="has-none-margin-bottom">
      <mn-card-item>
        <mn-card-body class="has-center-text">
          <h4>{{ title }}</h4>
          <small>{{ description }}</small>
        </mn-card-body>
      </mn-card-item>
      <mn-card-btns type="column">
        <button class="has-blue-text" @click="cancel">{{ cancelText }}</button>
      </mn-card-btns>
    </mn-card>
  </mn-popup>
</template>

<script>
  import Popup from './popup'
  import Card from '../card/card'
  import CardItem from '../card/card-item'
  import CardBody from '../card/card-body'
  import CardBtns from '../card/card-btns'

  export default {
    components: {
      [Popup.name]: Popup,
      [Card.name]: Card,
      [CardItem.name]: CardItem,
      [CardBody.name]: CardBody,
      [CardBtns.name]: CardBtns
    },
    methods: {
      cancel () {
        this.show = false
        this.$emit('cancel')
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    data () {
      return {
        show: false,
        title: 'Alert',
        description: '',
        cancelText: 'Close'
      }
    }
  }
</script>
