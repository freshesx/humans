<template>
  <mn-popup :show="show" :classes="[`${cssPrefix}loading-dialog`]">
    <mn-popup-card class="has-none-margin-bottom">
      <mn-card-item>
        <mn-card-body class="has-center-text">
          <mn-loading-icon></mn-loading-icon>
        </mn-card-body>
      </mn-card-item>
    </mn-popup-card>
  </mn-popup>
</template>

<script>
  import Popup from '../popup/popup'
  import PopupCard from '../popup/popup-card'
  import CardItem from '../card/card-item'
  import CardBody from '../card/card-body'
  import CardBtns from '../card/card-btns'
  import LoadingIcon from '../loading-icon'

  export default {
    components: {
      [Popup.name]: Popup,
      [PopupCard.name]: PopupCard,
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
