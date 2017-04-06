<template>
  <mn-popup
    :show="isShow"
    :class="[ 'mn-popup-message' ]"
    :masked="false"
    animation="slideInTop">
    <mn-popup-card :class="[ 'mn-popup-message-card' ]">
      <mn-card-item :class="[ 'mn-popup-message-title' ]">
        <mn-card-prefix>
          <mn-icon :class="{ [`has-${currentType.color}-text`]: true }" :name="iconName"></mn-icon>
        </mn-card-prefix>
        <mn-card-body>
          <h4><small>{{ title || currentType.text }}</small></h4>
        </mn-card-body>
        <mn-card-suffix @click.native="close">
          <mn-icon :name="closeSvg"></mn-icon>
        </mn-card-suffix>
      </mn-card-item>
      <mn-card-item :class="[ 'mn-popup-message-contents' ]">
        <mn-card-body>
          {{ description }}
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
  import cardPrefix from '../card/card-prefix'
  import cardSuffix from '../card/card-suffix'
  import icon from '../icon/icon'

  import chatbubble from 'vue-human-icons/js/ios/chatbubble'
  import checkmark from 'vue-human-icons/js/ios/checkmark'
  import closeEmpty from 'vue-human-icons/js/ios/close-empty'
  import close from 'vue-human-icons/js/ios/close'
  import information from 'vue-human-icons/js/ios/information'

  const toastrTypes = {
    default: { text: 'Message', icon: chatbubble, color: 'black' },
    primary: { text: 'Success', icon: checkmark, color: 'green' },
    warning: { text: 'Warning', icon: information, color: 'orange' },
    error: { text: 'Error', icon: close, color: 'pink' }
  }

  export default new Element({
    components: {
      [popup.name]: popup,
      [popupCard.name]: popupCard,
      [cardItem.name]: cardItem,
      [cardBody.name]: cardBody,
      [cardPrefix.name]: cardPrefix,
      [cardSuffix.name]: cardSuffix,
      [icon.name]: icon
    },
    methods: {
      close () {
        this.isShow = false
        this.$emit('close')
      },
      show () {
        this.isShow = true
        return this
      }
    },
    computed: {
      currentType () {
        return toastrTypes[this.type]
      },
      iconName () {
        return this.icon || this.currentType.icon
      }
    },
    data () {
      return {
        isShow: false,
        title: undefined,
        description: this.$t('mn.popup.messageDescription'),
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
  .mn-popup-message {
    top: 0.5rem;
    right: 0.5rem;
    left: 0.5rem;
    bottom: auto;

    &-card {
      max-width: 600px;
      margin: 0 auto;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.3)
    }

    &-title {
      padding: 0.3rem 1rem;
    }

    &-contents {
      padding: 1rem 1rem;
    }
  }
</style>
