<template>
  <mn-popup :show="show" :classes="[`${cssPrefix}popup-toastr`]" :masked="false" animation="slideInUp">
    <mn-card :style="{ 'max-width': '600px', 'margin': '0 auto', 'box-shadow': '0 0 6px rgba(0,0,0,0.3)' }">
      <mn-card-item :style="{ 'padding': '0.3rem 1rem' }">
        <mn-card-prefix>
          <mn-icon :class="[`has-${currentType.color}-text`]" :name="iconName"></mn-icon>
        </mn-card-prefix>
        <mn-card-body>
          <h4><small>{{ title || currentType.text }}</small></h4>
        </mn-card-body>
        <mn-card-suffix @click.native="close">
          <mn-icon :name="closeSvg"></mn-icon>
        </mn-card-suffix>
      </mn-card-item>
      <mn-card-item :style="{ 'padding': '1rem 1rem' }">
        <mn-card-body>
          {{ description }}
        </mn-card-body>
      </mn-card-item>
    </mn-card>
  </mn-popup>
</template>

<script>
  import Popup from './popup'
  import Card from '../card/card'
  import CardItem from '../card/card-item'
  import CardBody from '../card/card-body'
  import CardPrefix from '../card/card-prefix'
  import CardSuffix from '../card/card-suffix'

  import chatbubble from 'human-icons/js/ios/chatbubble'
  import checkmark from 'human-icons/js/ios/checkmark'
  import closeEmpty from 'human-icons/js/ios/close-empty'
  import close from 'human-icons/js/ios/close'
  import information from 'human-icons/js/ios/information'

  const toastrTypes = {
    default: { text: 'Message', icon: chatbubble, color: 'black' },
    primary: { text: 'Success', icon: checkmark, color: 'green' },
    warning: { text: 'Warning', icon: information, color: 'orange' },
    error: { text: 'Error', icon: close, color: 'pink' }
  }

  export default {
    components: {
      [Popup.name]: Popup,
      [Card.name]: Card,
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
