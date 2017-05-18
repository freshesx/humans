<template>
  <div class="mn-dashboard-breadcrumb">
    <div class="mn-dashboard-breadcrumb-btn" style="left: 1rem;">
      <mn-icon :name="icons.back"></mn-icon>
    </div>
    <div class="mn-dashboard-breadcrumb-btn" style="right: 1rem;">
      <mn-icon :name="icons.keypad"></mn-icon>
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
    bottom: 2rem;
    min-width: 44px;
    height: 44px;
    border-radius: 22px;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 0.5rem;
  }
</style>
