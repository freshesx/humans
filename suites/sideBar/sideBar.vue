<template>
  <div class="mn-side-bar" :class="{ 'is-active': show }">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import maskMixin from '../popup/maskMixin'

  export default new Element({
    name: 'mn-side-bar',
    mixins: [ maskMixin ],
    props: {
      show: Boolean
    },
    watch: {
      show (newVal) {
        if (newVal) {
          this.showMask(190)
        } else {
          this.closeMask()
        }
      },
      '$route.path' () {
        this.closePopup()
      }
    },
    methods: {
      /**
       * Rewrite maskMixin closePopup method
       * To notify onShowSidebar method
       *
       * @return {this}
       */
      closePopup () {
        this.$emit('update:show', false)
        return this
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars.scss";
  @import "../../scss/mixins/media.scss";

  $-side-bar-width: 220px;

  .mn-side-bar {
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
      width: $-side-bar-width;
      box-shadow: none;
      border-radius: 0;
      top: 0;
      left: 0;
      transition-duration: 0;
      transform: translateY(0);
    }
  }
</style>
