<template>
  <transition :name="transition || 'has-fade-in'">
    <div class="mn-loading-mask" v-if="visible" :style="{ zIndex }">
      <mn-loading-icon></mn-loading-icon>
    </div>
  </transition>
</template>

<script>
  import { loadingIcon } from '@humans/loading-icon'
  import { layerMixin } from '@humans/layer'
  import { shadeMixin } from '@humans/shade'

  export default {
    name: 'mn-loading-mask',
    components: Object.assign({}, loadingIcon),
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
  }
</script>
