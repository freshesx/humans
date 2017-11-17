<template>
  <div
    class="mn-turn"
    :class="{ [`is-${theme}`]: !!theme, 'is-checked': data === value }"
    @click="onInput"></div>
</template>

<script>
  import Element from '../../utils/Element'
  import isUndefined from 'lodash/isUndefined'

  export default new Element({
    name: 'mn-turn',
    props: {
      value: null,
      data: null,
      theme: {
        type: String,
        default: 'primary'
      }
    },
    methods: {
      onInput (event) {
        this.$emit('input', isUndefined(this.value) ? this.data : undefined)
      }
    }
  })
</script>

<style lang="scss">
  @import "./vars";

  .mn-turn {
    $-height: 2rem;

    display: inline-flex;
    position: relative;
    width: $-height * 1.625;
    height: $-height;
    border-radius: $-height;
    border: 1px solid transparent;
    cursor: pointer;
    outline: 0;
    appearance: none;
    -webkit-tap-highlight-color: transparent;

    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: $-height - 0.125rem;
      border-radius: ($-height - 0.125rem) / 2;
      transition: 0.233s;
    }

    &::before {
      width: 100%;
    }

    &::after {
      width: $-height - 0.125rem;
      background-color: #fff;
      box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);
    }

    &.is-checked {
      &::before {
        transform: scale(0);
      }

      &::after {
        transform: translateX($-height * 0.625);
      }
    }

    @each $name, $theme in $-mn-turn-theme {
      &.is-#{$name} {
        background: map-get($theme, 'bg');
        border-color: map-get($theme, 'border');

        &::before {
          background-color: map-get($theme, 'bg');
        }

        &.is-checked {
          border-color: map-get($theme, 'active');
          background-color: map-get($theme, 'active');
        }
      }
    }
  }
</style>
