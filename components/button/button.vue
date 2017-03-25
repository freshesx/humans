<template>
  <button
    class="mn-btn"
    :class="classes"
    :title="title"
    @click="click">
    <mn-loading-icon :class="{ 'has-one-margin-right': !!$slots.default }" v-if="loading"></mn-loading-icon>
    <mn-icon :class="{ 'has-one-margin-right': !!$slots.default }" :name="icon" v-if="icon && !loading"></mn-icon>
    <slot></slot>
  </button>
</template>

<script>
  import Element from '../../util/element'
  import LoadingIcon from '../loading-icon/loading-icon'
  import Icon from '../icon/icon'

  export default new Element({
    name: 'mn-btn',
    components: {
      [LoadingIcon.name]: LoadingIcon,
      [Icon.name]: Icon
    },
    props: {
      title: String,
      // Alias for MnIcon
      icon: null,
      // Theme, e.g: is-primary, is-secondary, is-error etc.
      // @todo(@deprecated)
      type: {
        type: String,
        validator: val => {
          console && console.warn('建议将 type 改为 theme，在后续的版本中即将废弃 type')
          return true
        }
      },
      theme: String,
      // Size, e.g: is-sm
      size: String,
      // Disabled
      disabled: Boolean,
      // Has active style
      active: Boolean,
      // Has block style
      block: Boolean,
      // Has circle style
      circle: Boolean,
      // Has bottom margin
      margin: Boolean
    },
    data () {
      return {
        loading: false
      }
    },
    computed: {
      computedTheme () {
        return typeof this.theme === undefined
          ? this.type
          : this.theme
      },
      classes () {
        return {
          [`is-${this.computedTheme}`]: !!this.computedTheme,
          [`is-${this.size}`]: !!this.size,
          'is-block': this.block,
          'is-disabled': this.disabled || this.loading,
          'is-active': this.active,
          'is-circle': this.circle,
          'is-margin-bottom': this.margin
        }
      }
    },
    methods: {
      click ($event) {
        // 1. If loading, prevent
        if (this.loading) {
          return
        }

        // 2. If disabled, $emit error event
        if (this.disabled) {
          $event.preventDefault()
          this.$emit('error', $event, this)
          return
        }

        // 3. Default emit click event
        this.$emit('click', $event, this)
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";
  @import "../../scss/mixins/media";
  @import "./theme";

  $-button: "mn-btn";
  $-button-theme: map-merge($-button-default-theme, $button-theme);
  $-button-mobile-radius: $button-mobile-radius;
  $-button-desktop-radius: $button-desktop-radius;

  //
  // @class .btn
  //
  .#{$-button} {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    height: 3rem;
    padding: 0.5rem 1rem;
    border-radius: $-button-mobile-radius;
    text-decoration: none;
    border: none;
    outline: none;
    background: transparent;
    line-height: 2rem;

    @include min-screen('desktop') {
      border-radius: $-button-desktop-radius;
    }

    &.is-margin-bottom {
      margin-bottom: 1rem;
    }

    &.is-sm {
      height: 2rem;
      padding: 0.375rem 1rem;
      line-height: 1rem;
      border-radius: $-button-mobile-radius * 0.75;
      font-size: 0.875rem;

      @include min-screen('desktop') {
        border-radius: $-button-desktop-radius;
      }
    }

    &.is-block {
      display: block;
      width: 100%;
    }

    &.is-disabled {
      cursor: not-allowed;
    }

    &.is-circle {
      width: 3rem;
      height: 3rem;
      border-radius: 1.5rem;
      padding: 0;
    }

    &.is-circle.is-sm {
      width: 2rem;
      height: 2rem;
      border-radius: 1rem;
    }
  }

  //
  // @class .btn.btn-primary, etc.
  //
  @mixin btn-style($bg, $color) {
    background-color: $bg;
    color: $color;

    &:hover {
      background-color: darken($bg, 10%);
    }
  }

  @mixin btn-bg-color ($options) {
    @if map-get($options, "bg") {
      background-color: map-get($options, "bg");
    }

    @if map-get($options, "color") {
      color: map-get($options, "color");
    }

    @if map-get($options, "border") {
      border-color: map-get($options, "border");
      border-width: 1px;
      border-style: solid;
    }
  }

  @mixin btn-set-type ($name, $value) {
    &.is-#{$name} {
      $normal: map-get($value, "normal");
      $hover: map-get($value, "hover");
      $active: map-get($value, "active");
      $disable: map-get($value, "disable");

      @if $hover == null {
        $hover: $normal;
      }

      @if $active == null {
        $active: $normal;
      }

      @if $disable == null {
        $disable: $normal;
      }

      // normal
      & {
        @if $normal {
          @include btn-bg-color($normal);
        }
      }

      // hover
      &:hover {
        @if $hover {
          @include btn-bg-color($hover);
        }
      }

      // active
      &.is-active,
      &.is-active:hover,
      &:active {
        background: #fff;

        @if $active {
          @include btn-bg-color($active);
        }
      }

      // disabled
      &.is-disabled {
        &,
        &:hover,
        &.is-active,
        &.is-active:hover,
        &:active {
          @if $disable {
            @include btn-bg-color($disable);
          }
        }
      }
    }
  }

  .#{$-button} {
    //
    // @class .btn.is-success, etc.
    //
    @each $name, $value in $-button-theme {
      @include btn-set-type($name, $value);
    }
  }
</style>
