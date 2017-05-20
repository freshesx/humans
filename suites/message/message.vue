<template>
  <mn-popup class="mn-message" :show="isShow" :masked="false"
    animation="slideInTop">
    <mn-card theme="glass" class="mn-message-card" rounded>
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
          <mn-icon :name="closeIcon"></mn-icon>
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
      popupManager
    ],
    props: {
      /**
       * 消息框的标题
       */
      title: String,

      /**
       * 消息框的主体消息
       */
      message: {
        type: String,
        default () { return this.$t('mn.popup.messageText') }
      },

      /**
       * 消息框的图标，默认为空，为空时显示系统设置的图标
       */
      icon: null,

      /**
       * 消息的类型，参考 TYPES
       */
      type: {
        type: String,
        default: 'default'
      },

      /**
       * 是否自动关闭消息框
       */
      autoClose: {
        type: Boolean,
        default: true
      },

      /**
       * 多久后自动关闭消息框
       */
      duration: {
        type: Number,
        default: 3000
      },

      /**
       * 默认的关闭按钮的图标
       */
      closeIcon: {
        default () { return require('vue-human-icons/js/ios/close-empty') }
      }
    },
    computed: {
      /**
       * 计算出当前的类型名称
       * @method currentType
       * @return {String}
       */
      currentType () {
        return TYPES[this.type]
      },

      /**
       * 计算出当前使用的图标
       * @method iconName
       * @return {String}
       */
      iconName () {
        return this.icon || this.currentType.icon
      }
    },
    mounted: function () {
      // 设定的时间后自动关闭
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
