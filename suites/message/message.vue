<template>
  <mn-popup class="mn-message" :show="isShow" :masked="false"
    animation="slideInTop">
    <mn-card class="mn-message-card">
      <!-- Title -->
      <mn-card-item class="mn-message-title">
        <mn-card-prefix>
          <mn-icon :class="`has-${currentType.color}-text`"
            :name="iconName"
            vertical="-3px"></mn-icon>
        </mn-card-prefix>
        <mn-card-body>
          <h4><small>{{ title || currentType.text }}</small></h4>
        </mn-card-body>
        <mn-card-suffix @click.native="close">
          <mn-icon :name="closeSvg"></mn-icon>
        </mn-card-suffix>
      </mn-card-item>
      <!-- Main contents -->
      <mn-card-item>
        <mn-card-body>
          {{ message }}
        </mn-card-body>
      </mn-card-item>
    </mn-card>
  </mn-popup>
</template>

<script>
  import Element from '../../utils/Element'
  import popup from '../popup/popup'
  import card from '../card/card'
  import cardItem from '../card/cardItem'
  import cardBody from '../card/cardBody'
  import cardPrefix from '../card/cardPrefix'
  import cardSuffix from '../card/cardSuffix'
  import icon from '../icon/icon'
  import closeEmpty from 'vue-human-icons/js/ios/close-empty'
  import TYPES from './types'
  import popupManager from '../popup/popupManager'

  export default new Element({
    components: {
      ...popup.inject(),
      ...card.inject(),
      ...cardItem.inject(),
      ...cardBody.inject(),
      ...cardPrefix.inject(),
      ...cardSuffix.inject(),
      ...icon.inject()
    },
    mixins: [
      /**
       * Add isShow, close(), show() mixins
       */
      popupManager
    ],
    computed: {
      currentType () {
        return TYPES[this.type]
      },
      iconName () {
        return this.icon || this.currentType.icon
      }
    },
    data () {
      return {
        title: undefined,
        message: this.$t('mn.popup.messageText'),
        icon: undefined,
        type: 'default',  // 'default', 'primary', 'warning', 'error'
        autoClose: true,
        duration: 3000,
        closeSvg: closeEmpty
      }
    },
    mounted: function () {
      // automatic close after 2s
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.duration)
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/mixins/media";

  .mn-message {
    top: 0.5rem;
    right: 0.5rem;
    left: 0.5rem;
    bottom: auto;

    @include min-screen('tablet') {
      width: 600px;
      left: 50%;
      margin-left: -300px;
    }

    &-card {
      margin-bottom: 0 !important;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3) !important;
    }

    &-title {
      padding: 0.5rem 1rem !important;
    }
  }
</style>
