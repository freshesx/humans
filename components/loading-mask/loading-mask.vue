<template>
  <mn-popup :show="isShow" :class="[ 'mn-loading-mask' ]">
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
  import Element from '../../util/Element'
  import popup from '../popup/popup'
  import popupCard from '../popup/popup-card'
  import cardItem from '../card/card-item'
  import cardBody from '../card/card-body'
  import loadingIcon from '../loading-icon/loading-icon'
  import popupManager from '../popup/popupManager'

  export default new Element({
    components: {
      [popup.name]: popup,
      [popupCard.name]: popupCard,
      [cardItem.name]: cardItem,
      [cardBody.name]: cardBody,
      [loadingIcon.name]: loadingIcon
    },
    mixins: [
      /**
       * Add isShow, close(), show() mixins
       */
      popupManager
    ]
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
