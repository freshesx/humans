<template>
  <div
    class="mn-turn"
    :class="{ 'is-checked': data === value }"
    @click="onInput"></div>
</template>

<script>
  import Element from '../../utils/Element'
  import isUndefined from 'lodash/isUndefined'

  export default new Element({
    name: 'mn-turn',
    props: {
      value: null,
      data: null
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
    background-color: $mn-turn-bg;
    border: 1px solid $mn-turn-border;
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
      background-color: $mn-turn-bg;
    }

    &::after {
      width: $-height - 0.125rem;
      background-color: #fff;
      box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);
    }

    &.is-checked {
      border-color: $mn-turn-active-bg;
      background-color: $mn-turn-active-bg;

      &::before {
        transform: scale(0);
      }

      &::after {
        transform: translateX($-height * 0.625);
      }
    }
  }
</style>
