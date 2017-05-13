<template>
  <div class="mn-dashboard">
    <div class="mn-dashboard-header">
      <div class="mn-dashboard-brand">
        <slot name="brand"></slot>
      </div>
      <div class="mn-dashboard-nav">
        <slot name="nav"></slot>
      </div>
    </div>
    <div class="mn-dashboard-body">
      <div class="mn-dashboard-side" :class="{ 'is-active': showSidebar }">
        <slot name="side"></slot>
      </div>
      <div class="mn-dashboard-main">
        <slot></slot>
      </div>
    </div>
    <mn-dashboard-status :menu="status" @showSidebar="onShowSidebar"></mn-dashboard-status>
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import dashboardStatus from './dashboardStatus'
  import maskManager from './maskManager'

  export default new Element({
    name: 'mn-dashboard',
    mixins: [ maskManager ],
    components: {
      ...dashboardStatus.inject()
    },
    props: {
      /**
       * Status menu configuare
       */
      status: {
        type: Array,
        default: val => {
          return []
        }
      }
    },
    data () {
      return {
        showSidebar: false
      }
    },
    methods: {
      /**
       * Control to show and hide sidebar
       *
       * @param  {Boolean}      show
       * @return {this}
       */
      onShowSidebar (show) {
        if (show) {
          this.showSidebar = true
          this.showMask(190)
        } else {
          this.showSidebar = false
          this.closeMask()
        }
        return this
      },

      /**
       * Rewrite maskManager closePopup method
       * To notify onShowSidebar method
       *
       * @return {this}
       */
      closePopup () {
        this.onShowSidebar(false)
        return this
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars.scss";
  @import "../../scss/mixins/media.scss";

  $-dashboard-side-width: 220px;

  .mn-dashboard {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .mn-dashboard-header {
    flex-shrink: 1;
    height: 60px;
    background: $blue;
    display: flex;

    @include min-screen(desktop) {
      background: linear-gradient(90deg, $blue, $blue 45%, $green);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
  }

  .mn-dashboard-body {
    flex: 1;
    display: flex;
  }

  .mn-dashboard-side {
    background: #fff;
    position: absolute;
    top: 100px;
    left: 0.5rem;
    right: 0.5rem;
    bottom: 1rem;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-radius: 0.75rem;
    z-index: 200;
    transform: translateY(120%);
    transition-duration: 500ms;

    &.is-active {
      transform: translateY(0);
      transition-duration: 500ms;
    }

    @include min-screen(tablet) {
      top: 500px;
      left: 6rem;
      right: 6rem;
      bottom: 1rem;
    }

    @include min-screen(desktop) {
      position: relative;
      width: $-dashboard-side-width;
      box-shadow: none;
      border-radius: 0;
      top: 0;
      left: 0;
      transition-duration: 0;
      transform: translateY(0);
    }
  }

  .mn-dashboard-main {
    position: relative;
    flex: 1;
  }
</style>
