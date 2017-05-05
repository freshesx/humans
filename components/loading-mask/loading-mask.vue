<template>
  <mn-popup :show="isShow" :class="[ 'mn-loading-mask' ]">
    <mn-loading-icon></mn-loading-icon>
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 66px;
    height: 66px;
    top: 45%;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 1);
    color: #333;
    border-radius: 0.75rem;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  }
</style>
