<template>
  <transition :name="transition || 'has-slide-in-top'">
    <div class="mn-message"
      :class="{ 'is-backdrop': enableBackdrop }"
      :style="{ zIndex }"
      @click="emitClick"
      v-if="visible">
      <div class="mn-message-action">
        <div class="mn-message-icon">
          <mn-icon :class="`has-${currentType.color}-text`"
            :name="iconName"
            vertical="-3px"></mn-icon>
        </div>
        <div class="mn-message-type">
          {{ title || currentType.text }}
        </div>
        <div class="mn-message-close" @click.prevent="hide">
          <mn-icon :name="closeIcon"></mn-icon>
        </div>
      </div>
      <div class="mn-message-contents">
        {{ message }}
      </div>
    </div>
  </transition>
</template>

<script>
  import Element from '../../utils/Element'
  import card from '../card/card'
  import cardItem from '../card/cardItem'
  import cardBody from '../card/cardBody'
  import cardPrefix from '../card/cardPrefix'
  import cardSuffix from '../card/cardSuffix'
  import icon from '../icon/icon'
  import TYPES from './types'
  import layerMixin from '../layer/layerMixin'

  export default new Element({
    components: {
      ...card.insert(),
      ...cardItem.insert(),
      ...cardBody.insert(),
      ...cardPrefix.insert(),
      ...cardSuffix.insert(),
      ...icon.insert()
    },
    mixins: [
      layerMixin
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
        default: '你有一条消息'
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
    data () {
      return {
        enableBackdrop: false
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
    methods: {
      // 上交 click 事件
      emitClick (event) {
        this.$emit('click', event, this)
      }
    },
    mounted: function () {
      if (document.body.style.hasOwnProperty('webkitBackdropFilter')) {
        this.enableBackdrop = true
      }

      // 设定的时间后自动关闭
      if (this.autoClose) {
        setTimeout(() => {
          this.hide()
        }, this.duration)
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/mixins/media";

  .mn-message {
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    left: 0.5rem;
    bottom: auto;
    background: rgba(white, 1);
    border-radius: 0.5rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

    &.is-backdrop {
      background: rgba(white, 0.6);
      -webkit-backdrop-filter: blur(10px);
    }

    @include min-screen('tablet') {
      width: 600px;
      left: 50%;
      margin-left: -300px;
    }
  }

  .mn-message-action {
    display: flex;
    padding: 0.5rem;
    padding-bottom: 0;
    align-items: center;
  }

  .mn-message-icon {
    margin-right: 0.5rem;
  }

  .mn-message-type {
    flex: 1;
    font-size: 0.875rem;
  }

  .mn-message-close {

  }

  .mn-message-contents {
    padding: 0.25rem 0.6rem 0.5rem 0.6rem;
    font-size: 0.875rem;
  }
</style>
