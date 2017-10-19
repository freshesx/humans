<template>
  <button
    class="mn-btn"
    :class="classes"
    :title="title"
    :name="name"
    @click="click">
    <mn-icon :name="icon" :loading="loading" v-if="icon || loading"></mn-icon>
    <slot></slot>
  </button>
</template>

<script>
  import Element from '../../utils/Element'
  import icon from '../icon/icon'

  /**
   * 按钮组件
   * @module suites/button/button
   * @example
   * <mn-btn>按钮</mn-btn>
   *
   * @param {string}   [name]             - 按钮的唯一名称
   * @param {string}   [title]            - 按钮的 SEO 标题
   * @param {*}        [icon]             - 按钮的图标
   * @param {string}   [theme]            - 按钮的主题，由 scss 控制
   * @param {string}   [size]             - 按钮的尺寸，目前仅提供 “sm”
   * @param {boolean}  [disabled=false]   - 是否禁用该按钮
   * @param {boolean}  [active=false]     - 按钮是否生效
   * @param {boolean}  [block=false]      - 按钮是否为块状元素
   * @param {boolean}  [circle=false]     - 按钮是否为圆形
   * @param {boolean}  [margin=false]     - 按钮是否具有 margin-bottom 值
   *
   * @slot  default                       - 显示按钮的文本
   */
  export default new Element({
    name: 'mn-btn',
    components: {
      ...icon.insert()
    },
    props: {
      name: String,
      title: String,
      icon: null,
      theme: String,
      size: String,
      disabled: Boolean,
      active: Boolean,
      block: Boolean,
      circle: Boolean,
      margin: Boolean
    },
    data () {
      return {
        loading: false
      }
    },
    computed: {
      classes () {
        return {
          [`is-${this.theme}`]: !!this.theme,
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
      click (event) {
        // 1. If loading, prevent
        if (this.loading) {
          event.preventDefault()
          event.stopPropagation()
          this.emitLoading(event)
          return
        }

        // 2. If disabled, $emit error event
        if (this.disabled) {
          event.preventDefault()
          event.stopPropagation()
          this.emitError(event)
          return
        }

        // 3. Default emit click event
        this.emitClick(event)
      },

      /**
       * 允许点击的情况的触发的事件，
       * 如果是载入状态或者禁用状态将无法触发。
       * @event click
       * @prop {Event}     - 事件对象
       * @prop {this}      - 按钮实例
       */
      emitClick (event) {
        this.$emit('click', event, this)
      },

      /**
       * 禁用状态下将触发 error 事件。
       * @event error
       * @prop {Event}    - 事件对象
       * @prop {this}     - 按钮实例
       */
      emitError (event) {
        this.$emit('error', event, this)
      },

      /**
       * 按钮处于载入状态时触发 loading 事件。
       * @event loading
       * @prop {Event}    - 事件对象
       * @prop {this}     - 按钮实例
       */
      emitLoading (event) {
        this.$emit('loading', event, this)
      },

      /**
       * 启动加载状态
       * @method start
       * @return {this}     - 按钮实例
       */
      start () {
        this.loading = true
        return this
      },

      /**
       * 完成载入状态
       * @method finish
       * @return {this}     - 按钮实例
       */
      finish () {
        this.loading = false
        return this
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/mixins/media";
  @import "./vars";

  .mn-btn {
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    height: $-mn-button-height;
    line-height: 1.5rem;
    padding: (($-mn-button-height - 1.5rem) / 2) 1rem;
    border-radius: $mn-button-mobile-radius;
    text-decoration: none;
    border: none;
    outline: none;
    background: transparent;
    vertical-align: middle;

    @include min-screen('desktop') {
      border-radius: $mn-button-desktop-radius;
    }

    &.is-margin-bottom {
      margin-bottom: 1rem;
    }

    &.is-sm {
      height: $-mn-button-sm-height;
      padding: (($-mn-button-sm-height - 1.5rem) / 2) 1rem;
      border-radius: $mn-button-mobile-radius * 0.75;
      font-size: 0.875rem;

      @include min-screen('desktop') {
        border-radius: $mn-button-desktop-radius;
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

  .mn-btn {
    //
    // @class .btn.is-success, etc.
    //
    @each $name, $value in $-mn-button-theme {
      @include btn-set-type($name, $value);
    }
  }
</style>
