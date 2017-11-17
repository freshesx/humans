<template>
  <div class="mn-nav-bar-back" @click="$router.go(-1)">
    <mn-icon :name="icon" v-if="!simple"></mn-icon>
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import iconElement from '../icon/icon'

  export default new Element({
    name: 'mn-nav-bar-back',
    components: {
      ...iconElement.insert()
    },
    props: {
      icon: {
        type: Object,
        default: () => {
          return require('vue-human-icons/js/ios/arrow-back')
        }
      },
      simple: Boolean
    }
  })
</script>

<style lang="scss">
  .mn-nav-bar-back {
    display: flex;
    min-width: 50px;
    height: 100%;
    align-items: center;
    cursor: pointer;
  }
</style>
