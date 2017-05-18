<template>
  <div class="mn-dashboard-breadcrumb">
    <div class="mn-dashboard-breadcrumb-btn" style="left: 1rem;">
      <div class="mn-dashboard-breadcrumb-item" @click="$router.go(-1)">
        <mn-icon :name="icons.back" vertical="-2px"></mn-icon>
      </div>
      <div class="mn-dashboard-breadcrumb-item" @click="onOpen">
        <mn-icon :name="icons.keypad" vertical="-2px"></mn-icon>
      </div>
    </div>
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import iconElement from '../icon/icon'

  export default new Element({
    name: 'mn-dashboard-breadcrumb',
    components: {
      ...iconElement.inject()
    },
    props: {
      show: Boolean
    },
    data () {
      return {
        icons: {
          back: require('vue-human-icons/js/ios/arrow-back'),
          keypad: require('vue-human-icons/js/ios/keypad')
        }
      }
    },
    methods: {
      onOpen () {
        console.log('nihao')
        this.$emit('update:show', true)
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars.scss";

  .mn-dashboard-breadcrumb {
    position: relative;
    width: 100%;
    height: 0;
  }

  .mn-dashboard-breadcrumb-btn {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 1rem;
    min-width: 44px;
    height: 44px;
    border-radius: 22px;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
  }

  .mn-dashboard-breadcrumb-item {
    padding: 0 1.2rem;

    & + & {
      border-left: solid 1px rgba(255, 255, 255, 0.1);
    }
  }
</style>
