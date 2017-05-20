<template>
  <mn-popup class="mn-loading-mask" :show="isShow">
    <mn-loading-icon></mn-loading-icon>
  </mn-popup>
</template>

<script>
  import Element from '../../utils/Element'
  import popup from '../popup/popup'
  import loadingIcon from '../loadingIcon/loadingIcon'
  import popupMixin from '../popup/popupMixin'

  export default new Element({
    components: {
      ...popup.inject(),
      ...loadingIcon.inject()
    },
    mixins: [
      popupMixin
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
