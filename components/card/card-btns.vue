<template>
  <div class="mn-card-btns" :class="{ [`is-${type}`]: !!type }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mn-card-btns',
    props: {
      type: {
        type: String,
        validator: val => ['column'].includes(val)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-card-btns {
    > .button,
    > button {
      display: block;
      outline: none;
      -webkit-appearance: none;
      width: 100%;
      border: none;
      background-color: transparent;
      padding: $grid-gutters;
      text-align: center;
      cursor: pointer;
      text-decoration: none;
      transition: background-color 0.2s;
      border-top: solid 1px #eee;

      &:first-child {
        border-top: none;
      }

      &:hover {
        background-color: #f2f2f2;
      }
    }

    &.is-column {
      display: flex;

      > .button,
      > button {
        flex: 1 1;
        border-top: none;
        border-left: solid 1px #eee;

        &:first-child {
          border-left: none;
        }
      }
    }
  }

  // @import mn-card-item, mn-card-media
  .mn-card-item + .mn-card-btns,
  .mn-card-media + .mn-card-btns,
  .mn-card-btns + .mn-card-btns {
    border-top: solid 1px rgba(0, 0, 0, 0.1);
  }
</style>
