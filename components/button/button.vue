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
      icon: null,
      // is disabled
      disabled: {
        type: Boolean,
        default: false
      },
      active: {
        type: Boolean,
        default: false
      },
      // is-primary, is-secondary, is-error etc.
      type: {
        type: String
      },
      // is block
      block: {
        type: Boolean,
        default: false
      },
      // is-sm
      size: {
        type: String
      },
      // is circle
      circle: {
        type: Boolean,
        default: false
      },
      margin: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        loading: false
      }
    },
    computed: {
      classes () {
        let classes = {}

        // type
        classes[`is-${this.type}`] = this.type

        // size
        classes[`is-${this.size}`] = this.size

        // block
        classes['is-block'] = this.block

        // disabled
        classes['is-disabled'] = this.disabled || this.loading

        // active
        classes['is-active'] = this.active

        // circle
        classes['is-circle'] = this.circle

        // margin bottom
        classes['is-margin-bottom'] = this.margin

        return classes
      }
    },
    methods: {
      click ($event) {
        // If loading, prevent
        if (this.loading) return

        if (!this.disabled) {
          this.$emit('click', $event, this)
        } else {
          $event.preventDefault()
          this.$emit('error', $event, this)
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  $-button: "mn-btn";
  $-button-theme: $button-theme;

  //
  // @class .btn
  //
  .#{$-button} {
    display: inline-block;
    align-items: center;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    height: 3rem;
    padding: 0.5rem 1rem;
    border-radius: $base-radius;
    text-decoration: none;
    border: none;
    outline: none;
    background: transparent;
    line-height: 2rem;

    &.is-margin-bottom {
      margin-bottom: 1rem;
    }

    &.is-sm {
      height: 2rem;
      padding: 0.5rem 1rem;
      line-height: 1rem;
      border-radius: $base-radius * 0.75;
      font-size: 0.875rem;
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
