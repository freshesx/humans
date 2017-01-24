<template>
  <div :class="[ `${cssPrefix}nav-bar` ]">
    <div :class="[`${cssPrefix}nav-bar-prefix`]">
      <slot name="prefix"></slot>
    </div>
    <div :class="[`${cssPrefix}nav-bar-body`]">
      <slot name="body"></slot>
    </div>
    <div :class="[`${cssPrefix}nav-bar-suffix`]">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'mn-nav-bar',
    props: {
      loading: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>

<style lang="scss">
  @import "../../sass/variables";

  .#{$namespace}nav-bar {
    display: flex;
    background: #fafafa;
    height: 50px;
    white-space: nowrap;

    &-prefix {
      flex: 1;
      display: flex;
      align-items: center;
      padding-left: 0.5rem;
    }

    &-suffix {
      flex: 1;
      display: flex;
      align-items: center;
      padding-right: 0.5rem;
    }

    &-body {
      flex: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }
</style>
