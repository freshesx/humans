<template>
  <div class="mn-nav-bar-back" @click="$router.go(-1)">
    <mn-icon :name="icon" v-if="!simple"></mn-icon>
    <slot></slot>
  </div>
</template>

<script>
  import { icon } from '@humans/icon'
  import backIcon from '@freshes/icons/js/ios/arrow-back'

  export default {
    name: 'mn-nav-bar-back',
    components: Object.assign({}, icon),
    props: {
      icon: {
        default: () => backIcon
      },
      simple: Boolean
    }
  }
</script>
