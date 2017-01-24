<template>
  <div :class="[`${cssPrefix}card-btns`, typeClass]">
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
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      typeClass () {
        return { [`is-${this.type}`]: !!this.type }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../sass/variables";

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
</style>
