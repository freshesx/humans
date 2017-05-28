<template>
  <input
    class="mn-switch"
    type="checkbox"
    :checked="data === value"
    @change="onInput">
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-switch',
    props: {
      value: {},
      data: {}
    },
    methods: {
      onInput (event) {
        this.$emit('input', event.target.checked ? this.data : undefined)
      }
    }
  })
</script>

<style lang="scss">
  @import "./vars";

  .mn-switch {
    $-height: 2rem;

    display: inline-flex;
    position: relative;
    width: $-height * 1.625;
    height: $-height;
    border-radius: $-height;
    background-color: $mn-switch-bg;
    border: 1px solid $mn-switch-border;
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
      background-color: $mn-switch-bg;
    }

    &::after {
      width: $-height - 0.125rem;
      background-color: #fff;
      box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);
    }

    &:checked {
      border-color: $mn-switch-active-bg;
      background-color: $mn-switch-active-bg;

      &::before {
        transform: scale(0);
      }

      &::after {
        transform: translateX($-height * 0.625);
      }
    }
  }
</style>
