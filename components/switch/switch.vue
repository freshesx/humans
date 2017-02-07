<template>
  <input
    class="mn-switch"
    type="checkbox"
    :checked="data === value"
    @change="onInput">
</template>

<script>
  export default {
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
  }
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-switch {
    $height: 2rem;

    display: inline-flex;
    position: relative;
    width: $height * 1.625;
    height: $height;
    border-radius: $height;
    background-color: $gray-darker;
    border: 1px solid $gray-darker;
    cursor: pointer;
    outline: 0;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;

    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: $height - 0.125rem;
      border-radius: ($height - 0.125rem) / 2;
      transition: 0.233s;
    }

    &::before {
      width: 100%;
      background-color: $gray-lighter;
    }

    &::after {
      width: $height - 0.125rem;
      background-color: #fff;
      box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);
    }

    &:checked {
      border-color: $green;
      background-color: $green;

      &::before {
        transform: scale(0);
      }

      &::after {
        transform: translateX($height * 0.625);
      }
    }
  }
</style>
