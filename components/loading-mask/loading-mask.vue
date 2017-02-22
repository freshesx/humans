<template>
  <mn-popup :show="show" :class="[ 'mn-loading-mask' ]">
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
  import Element from '../../util/element'
  import Popup from '../popup/popup'
  import PopupCard from '../popup/popup-card'
  import CardItem from '../card/card-item'
  import CardBody from '../card/card-body'
  import LoadingIcon from '../loading-icon'

  export default new Element({
    components: {
      [Popup.name]: Popup,
      [PopupCard.name]: PopupCard,
      [CardItem.name]: CardItem,
      [CardBody.name]: CardBody,
      [LoadingIcon.name]: LoadingIcon
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
  })
</script>

<style lang="scss">
  .mn-loading-mask {
    width: 100px;
    top: 45%;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
