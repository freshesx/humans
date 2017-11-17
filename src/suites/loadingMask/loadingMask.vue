<template>
  <transition :name="transition || 'has-fade-in'">
    <div class="mn-loading-mask" v-if="visible" :style="{ zIndex }">
      <mn-loading-icon></mn-loading-icon>
    </div>
  </transition>
</template>

<script>
  import Element from '../../utils/Element'
  import loadingIcon from '../loadingIcon/loadingIcon'
  import layerMixin from '../layer/layerMixin'
  import shadeMixin from '../layer/shadeMixin'

  export default new Element({
    name: 'mn-loading-mask',
    components: {
      ...loadingIcon.insert()
    },
    mixins: [
      layerMixin,
      shadeMixin
    ],
    props: {
      shadePropsData: {
        type: Object,
        default () { return { disableClosing: true } }
      }
    }
  })
</script>

<style lang="scss">
  .mn-loading-mask {
    position: fixed;
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
