<template>
  <mn-popup
    :show="show"
    :class="[ 'mn-popup-message' ]"
    :masked="false"
    animation="slideInUp">
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
  import Popup from './popup'
  import PopupCard from '../popup/popup-card'
  import CardItem from '../card/card-item'
  import CardBody from '../card/card-body'
  import CardPrefix from '../card/card-prefix'
  import CardSuffix from '../card/card-suffix'

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

  export default {
    components: {
      [Popup.name]: Popup,
      [PopupCard.name]: PopupCard,
      [CardItem.name]: CardItem,
      [CardBody.name]: CardBody,
      [CardPrefix.name]: CardPrefix,
      [CardSuffix.name]: CardSuffix
    },
    methods: {
      close () {
        this.show = false
        this.$emit('close')
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      currentType () {
        return toastrTypes[this.type]
      },
      iconName () {
        return this.icon || this.currentType.icon
      }
    },
    data () {
      return {
        show: false,
        title: undefined,
        description: 'You have a message',
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
  }
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
