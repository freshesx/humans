<template>
  <mn-popup :show="show" :classes="[`${cssPrefix}loading-dialog`]">
    <mn-card class="has-none-margin-bottom">
      <mn-card-item>
        <mn-card-body class="has-center-text">
          <mn-loading-icon></mn-loading-icon>
        </mn-card-body>
      </mn-card-item>
    </mn-card>
  </mn-popup>
</template>

<script>
  import Popup from '../popup/popup'
  import Card from '../card/card'
  import CardItem from '../card/card-item'
  import CardBody from '../card/card-body'
  import CardBtns from '../card/card-btns'
  import LoadingIcon from '../loading-icon'

  export default {
    components: {
      [Popup.name]: Popup,
      [Card.name]: Card,
      [CardItem.name]: CardItem,
      [CardBody.name]: CardBody,
      [CardBtns.name]: CardBtns,
      [LoadingIcon.name]: LoadingIcon
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    data () {
      return {
        show: false
      }
    },
    methods: {
      close: function () {
        this.show = false
      }
    }
  }
</script>
